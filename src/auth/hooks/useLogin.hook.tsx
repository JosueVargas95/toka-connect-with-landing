import z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas/login.schema";
import { loginRequest } from "../services/auth.service";
import { useNavigate } from "react-router";

export function useLoginHook() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);

    try {
      const response = await loginRequest(data.email, data.password);
      console.log({ response });

      navigate("/admin");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    showPassword,
    setShowPassword,
    isLoading,
    setIsLoading,
    form,
    handleSubmit,
  };
}
