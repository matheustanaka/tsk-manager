import "../Header/style.scss";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Task Manager</h1>
        <a
          href="https://github.com/matheustanaka/tsk-manager"
          target="_blank"
          rel="noreferrer"
        >
          <button> Repository </button>
        </a>
      </header>
    </div>
  );
};

export default Header;
