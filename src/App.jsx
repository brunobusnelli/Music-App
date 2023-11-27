import { Route, Routes } from "react-router-dom";
import Library from "./pages/Library/Library";
import Player from "./pages/Player/Player";
import Feed from "./pages/Feed/Feed";
import "./pages/Home/home.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./auth/Login";
import { useEffect, useState } from "react";
import { setClientToken } from "./spotify";
function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token")
    const hash = window.location.hash;
    window.location.hash = ""
    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token)
    }else{
      setToken(token)
      setClientToken(token)
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <div className="main-body">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/player" element={<Player />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
