"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Input from "./FormInputs/Input";
import FileInput from "./FormInputs/FileInput";
import Swal from "sweetalert2";
import useUserAuth from "@/contexts/userAuth";
import Select from "./FormInputs/Select";
import { contentTypes } from "@/utils/contentTypes";

const AddUpdateContent = ({ postData }) => {
  const router = useRouter();
  const { userAuth } = useUserAuth();
  const editorRef = useRef(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: postData?.title || "",
      type: postData?.type || "",
      country: postData?.country || "",
      content: postData?.content || "",
    },
  });

  const onSubmit = async (data) => {
    Swal.fire({
      title: "Loading",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    data.content = editorRef.current.getContent();

    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData
      );
      data.thumbnail = response.data.data.url;
    }
    if (!postData) {
      data.userId = userAuth._id;
      // data.isApproved = false;
    }
    if (postData) {
      try {
        await axios.put(`/api/contents/${postData._id}`, data);
        router.push(`/content/${postData._id}`);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Post updated successfully",
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            error.response?.data.message ||
            error.message ||
            "Something went wrong",
        });
      }
    } else {
      try {
        const res = await axios.post("/api/contents", data);
        router.push(`/content/${res.data._id}`);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Post created successfully",
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          showConfirmButton: true,
          text:
            error.response.data.message ||
            error.message ||
            "Something went wrong",
        });
      }
    }
  };
  return (
    <section className="card">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <Input
          label="title"
          type="text"
          register={register}
          errorLabel={errors.title?.type === "required" && "Title is required"}
          required
        />
        {(preview || postData?.thumbnail) && (
          <div className="form-control">
            <Image
              height={300}
              width={500}
              src={preview || postData?.thumbnail}
              alt="Image Preview"
              className="mx-auto max-h-96 object-cover rounded-md my-3"
            />
          </div>
        )}
        <FileInput
          setImage={setImage}
          setPreview={setPreview}
          title="Thumbnail"
        />

        <Select
          label="type"
          register={register}
          options={contentTypes}
          errorLabel={errors.type?.type === "required" && "Type is required"}
          required
        />

        <Input
          label="country"
          type="text"
          register={register}
          errorLabel={
            errors.country?.type === "required" && "Country is required"
          }
        />

        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
            {errors.content && (
              <span className="text-error">Content is required</span>
            )}
          </label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
            initialValue={postData?.content || ""}
            onInit={(_evt, editor) => (editorRef.current = editor)}
            init={{
              height: 500,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">
            {postData ? "Update" : "Add Post"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddUpdateContent;
