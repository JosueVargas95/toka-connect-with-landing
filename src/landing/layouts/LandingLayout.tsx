import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChatWidget } from "../chat/ChatWidget";

export const LandingLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <ChatWidget />
    </div>
  );
};
