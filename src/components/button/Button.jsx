const Button = ({ children, style, classname, title, onClick }) => {
  return (
    <button
      style={style}
      title={title}
      className={`btn ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
