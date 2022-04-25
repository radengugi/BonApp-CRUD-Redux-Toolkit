const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-teal-600 text-white py-2 px-6 my-10 rounded hover:bg-teal-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
