import { users } from "@/data/users";

export const loginRequest = async (email: string, password: string) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  return {
    user,
    token: "token",
  };
};
