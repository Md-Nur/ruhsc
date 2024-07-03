import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const DeleteContent = ({ id, type }) => {
  const router = useRouter();
  const handleDelete = async () => {
    // Add your delete logic
    try {
      await axios.delete(`/api/contents/${id}`);
      router.push(`${type === "blog" ? "/blogs" : "/events"}`);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Content deleted successfully",
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message || "Something went wrong",
      });
    }
  };
  return (
    <>
      <button
        className="btn btn-error"
        onClick={() =>
          document.getElementById(`delete_content_${id}`).showModal()
        }
      >
        Delete
      </button>

      <dialog id={`delete_content_${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Are sure?</h3>
          <p className="py-4">
            Do you really want to delete this Content? This process cannot be
            undone.
          </p>
          <form onSubmit={handleDelete} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-error">Delete</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default DeleteContent;
