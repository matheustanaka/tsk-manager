import { useState, useEffect } from "react";
import axios from "axios";
import { TaskItem } from "../TaskItem/TaskItem.jsx";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </>
  );
};

export default Tasks;
