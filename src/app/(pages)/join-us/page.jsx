"use client";
import Input from "@/components/FormInputs/Input";
import HeroForms from "@/components/HeroForms";
import groupImg from "@/assets/defaultAvatar.jpg";
import { useForm } from "react-hook-form";
import Buttons from "@/components/FormInputs/Buttons";
import { useEffect, useState } from "react";
import FileInput from "@/components/FormInputs/FileInput";
import axios from "axios";
import Swal from "sweetalert2";
import useUserAuth from "@/contexts/userAuth";
import { useRouter } from "next/navigation";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
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

    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData
      );
      data.avatar = response.data.data.url;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Image is required",
        showCloseButton: true,
      });
      return;
    }

    try {
      const response = await axios.post(`/api/signin`, data);
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
    <HeroForms title="Sign In" imgUrl={preview || groupImg}>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <FileInput setImage={setImage} setPreview={setPreview} title="Avatar" />
        <Input
          label="name"
          type="text"
          register={register}
          errorLabel={errors.name?.type === "required" && "Name is required"}
          required
        />
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
          label="Sign In"
          linkUrl="/login"
          linkLabel="Already have an account login"
        />
      </form>
    </HeroForms>
  );
};

export default Signin;
