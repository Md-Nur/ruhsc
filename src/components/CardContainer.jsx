const CardContainer = ({ children, title }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-1 md:p-3">
      <h2 className="text-3xl font-bold text-center my-5">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
