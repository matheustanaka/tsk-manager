export const TaskItem = ({ task }) => {
  return (
    <>
      <h1>{task.description}</h1>
      <h2>{task.isCompleted ? "Completa" : "Fudeu pae"}</h2>
    </>
  );
};
