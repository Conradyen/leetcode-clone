import { userResolver } from "./resolvers";
import { merge } from "lodash";

export const resolvers = merge(userResolver);
