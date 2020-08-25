import { Dispatch } from "redux";

interface IMiddleware {
  dispatch: Dispatch<any>;
  getState?: any;
}

export const customMiddleware = ({ dispatch }: IMiddleware) => (next: any) => (
  action: any
) => {
  return next(action);
};
