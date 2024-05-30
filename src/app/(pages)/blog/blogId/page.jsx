const page = ({ params }) => {
  return (
    <div>
      <h1>Blog ID: {params.blogId}</h1>
    </div>
  );
};

export default page;
