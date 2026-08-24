import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MusicPlayer } from "../components/MusicPlayer";

export function Layout() {
  return (
    <div className="min-h-screen relative bg-linear-to-br from-[#1f1322] to-[#180d1a] text-white flex flex-col font-libre-caslon-text">
      <Navbar />
      <Outlet />
      <MusicPlayer />
    </div>
  );
}
