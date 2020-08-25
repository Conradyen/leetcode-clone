import { PubSub, withFilter } from "graphql-subscriptions";
import { User } from "../entity/User";
import { IResolvers } from "apollo-server-express";
import { Message } from "../entity/Message";
import { createQueryBuilder } from "typeorm";

const pubsub = new PubSub();

const NEW_CHANNEL_MESSAGE = "NEW_CHANNEL_MESSAGE";

export const messageResolver: IResolvers = {
  Subscription: {
    newChannelMessage: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_CHANNEL_MESSAGE),
        (payload, args) => payload.channelId === args.channelId
      ),
    },
  },
  Message: {
    user: ({ user, userId }, args, { models }) => {
      if (user) {
        return user;
      }

      return User.findOne({ where: { id: userId } }, { raw: true });
    },
  },
  Query: {
    messages: async (_, __, { req }) => {
      if (!req.userId) {
        return null;
      }
      const msg = await createQueryBuilder("users")
        .leftJoinAndSelect("users.msgSend", "Message")
        .where("users.id = :id", { id: req.userId })
        .getOne();
      return msg;
    },
  },
  Mutation: {
    createMessage: async (parent, args, { models, user }) => {
      try {
        const message = await Message.create({
          ...args,
          userId: user.id,
        });

        const asyncFunc = async () => {
          const currentUser = await User.findOne({
            where: {
              id: user.id,
            },
          });

          pubsub.publish(NEW_CHANNEL_MESSAGE, {
            channelId: args.channelId,
            newChannelMessage: {
              ...message.dataValues,
              user: currentUser.dataValues,
            },
          });
        };

        asyncFunc();

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
