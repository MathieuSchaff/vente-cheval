// components/LoginForm.tsx
import { useForm, SubmitHandler } from "react-hook-form";

import { loginUser } from "../../../utils/auth";
import useUser from "../../../hooks/useUser";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password cannot be longer than 128 characters" })
    .refine(
      (password) =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,128}$/.test(password),
      { message: "Password must contain at least one letter and one number" }
    ),
});
type FormValues = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { mutate } = useUser();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data", data);
    const result = await loginUser(data.email, data.password);
    if (result.success) {
      mutate(); // Update the user state
    } else {
      console.error(result.message);
    }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true, maxLength: 35 })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, maxLength: 20 })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
