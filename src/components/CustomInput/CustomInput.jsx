import "./CustomInput.scss";

export const CustomInput = ({ onChange }) => {
  return (
    <div className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        placeholder="Adicionar task ..."
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
