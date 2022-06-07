import "./CustomInput.scss";

export const CustomInput = ({ onChange, value, onEnterPress }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onEnterPress();
  };

  return (
    <div className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        placeholder="Adicionar task ..."
        value={value}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};
