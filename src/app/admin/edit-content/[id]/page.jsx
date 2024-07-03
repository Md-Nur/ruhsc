"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "@/components/Loading";
import AddUpdateContent from "@/components/AddUpdateContent";

const EditContent = ({ params }) => {
  const content = useQuery({
    queryKey: ["content", params.id],
    queryFn: async () => {
      const response = await axios.get(`/api/contents/${params.id}`);
      return response.data;
    },
  });
  if (content.isLoading) return <Loading />;
  return <AddUpdateContent postData={content.data} />;
};

export default EditContent;
