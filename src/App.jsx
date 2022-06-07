import ListTasks from "./components/ListTasks/ListTasks.jsx";
import Header from "./components/Header/Header.jsx";
import "../src/styles/global.scss";

const App = () => {
  return (
    <>
      <Header />
      <ListTasks />
    </>
  );
};

export default App;
