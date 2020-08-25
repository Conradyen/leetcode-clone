import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { User } from "../entity/User";
export const createTokens = (user: User) => {
  const refreshToken = sign(
    { userId: user.id, count: user.count },
    REFRESH_TOKEN,
    {
      expiresIn: "7d",
    }
  );
  const accessToken = sign({ userId: user.id }, ACCESS_TOKEN, {
    expiresIn: "15min",
  });

  return { refreshToken, accessToken };
};
