import api from "./api";

export interface User {
  id: number;
  username: string;
  token: string;
  fullname: string;
  email: string;
  phone: string;
}

export async function login(phone: string) {
  return api.get<User>(`/login?phone=${phone}`);
}
