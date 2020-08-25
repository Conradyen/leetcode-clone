import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { User } from "../entity/User";
import { createTokens } from "./createTokens";

export const authMiddleWare = async (req: any, res: any, next: any) => {
  const refreshToken = req.cookies["refresh-token"];
  const accessToken = req.cookies["access-token"];
  if (!refreshToken && !accessToken) {
    return next();
  }

  try {
    const data = verify(accessToken, ACCESS_TOKEN) as any;
    req.userId = data.userId;
    return next();
  } catch {}

  if (!refreshToken) {
    return next();
  }

  let data;

  try {
    data = verify(refreshToken, REFRESH_TOKEN) as any;
  } catch {
    return next();
  }

  const user = await User.findOne(data.userId);
  // token has been invalidated
  if (!user || user.count !== data.count) {
    return next();
  }

  const tokens = createTokens(user);

  res.cookie("refresh-token", tokens.refreshToken);
  res.cookie("access-token", tokens.accessToken);
  req.userId = user.id;

  next();
};
