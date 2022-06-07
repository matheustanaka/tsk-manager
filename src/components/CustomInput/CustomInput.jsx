import "./CustomInput.scss";

export const CustomInput = ({ onChange, value }) => {
  return (
    <div className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        placeholder="Adicionar task ..."
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
