import { getToken } from "../helpers/token";

export function useAuth() {
  return {
    isAuth: !!getToken(),
  };
}
