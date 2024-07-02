"use client";
import Input from "@/components/FormInputs/Input";
import HeroForms from "@/components/HeroForms";
import groupImg from "@/assets/defaultAvatar.jpg";
import { useForm } from "react-hook-form";
import Buttons from "@/components/FormInputs/Buttons";
import axios from "axios";
import Swal from "sweetalert2";
import useUserAuth from "@/contexts/userAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userAuth, setLoading, setUserAuth } = useUserAuth();
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    Swal.fire({
      title: "Loading",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post(`/api/login`, data);
      setUserAuth(response.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User created successfully",
      });
      router.push("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.response.data.message ||
          error.message ||
          "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userAuth?.name) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are already logged in",
      });
      router.push("/");
    }
  }, []);

  return (
    <HeroForms title="Sign In" imgUrl={groupImg}>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="email"
          type="email"
          register={register}
          errorLabel={errors.email?.type === "required" && "Email is required"}
          required
        />
        <Input
          label="password"
          type="password"
          register={register}
          errorLabel={
            errors.password?.type === "required" && "Password is required"
          }
          required
        />

        <Buttons
          label="Login"
          linkUrl="/join-us"
          linkLabel="Don't have any account? Join us!"
        />
      </form>
    </HeroForms>
  );
};

export default Login;
