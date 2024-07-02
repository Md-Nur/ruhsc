import { ChangeEvent, useId } from "react";
import { FaUpload } from "react-icons/fa";

const FileInput = ({
  setImage,
  setPreview,
}: {
  setImage: (file: File) => void;
  setPreview: (preview: string) => void;
}) => {
  const id = useId();
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="form-control">
      <label
        htmlFor={id}
        className="flex flex-row items-center gap-2 px-1 justify-evenly bg-neutral py-2 rounded-md cursor-pointer hover:bg-neutral-focus"
      >
        <FaUpload className="text-3xl btn-neutral" />
        <input
          id={id}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <span className="uppercase text-neutral-content">Avatar</span>
      </label>
    </div>
  );
};

export default FileInput;
