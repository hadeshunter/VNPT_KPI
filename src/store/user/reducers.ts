import { UserState, UserActionTypes, LOGIN, LOGOUT } from "./types";

// const initialState: UserState = { info: null };
const initialState: UserState = {
  info: {
    id: 1,
    username: "admin",
    token: "abcasdasdqweqw",
    fullname: "Huỳnh Minh Trí",
    email: "admin@vnpt.vn",
    phone: "0987654321",
  },
};

export function userReducer(
  state = initialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case LOGIN:
      return { info: action.payload };

    case LOGOUT:
      return { info: null };

    default:
      return state;
  }
}
