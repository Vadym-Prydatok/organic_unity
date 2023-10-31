import { useAppSelector } from "../store/store"

export const useAuth = () => {
  const {email, token, id } = useAppSelector((state) => state.user);

  const isAuth = Boolean(email && token && id);

  return isAuth
}