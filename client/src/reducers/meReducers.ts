interface IState {}

const initState: IState = {};

export default function meReducer(
  state: IState = initState,
  action: any
): IState {
  switch (action.type) {
    default:
      return { ...state };
  }
}
