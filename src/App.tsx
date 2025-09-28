import "./App.css";
import logo from "./assets/logo.svg";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={logo} alt="logo tienda" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
