import "../CustomButton/CustomButton.scss";

export const CustomButton = ({ children, onClick }) => {
  return (
    <div>
      <button className="custom-button-container" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
