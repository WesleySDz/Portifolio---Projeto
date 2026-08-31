import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MusicPlayer } from "../components/MusicPlayer";

export function Layout() {
  return (
    <div className="min-h-screen relative bg-screen-gradient text-white flex flex-col font-serif">
      <Navbar />
      <Outlet />
      <MusicPlayer />
    </div>
  );
}
