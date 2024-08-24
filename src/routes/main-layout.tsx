import { Link, NavLink, Outlet } from "react-router-dom";

import MobileNavBar from "../components/navigation/mobile-drawer";
import { navLinks } from "../data/fake-data";

export default function MainLayout() {
  return (
    <div>
      {/* Navigation bar */}
      <div className="sticky top-0 z-50 hidden bg-white sm:block">
        <div className="section-layout flex justify-between  py-5">
          <Link to={"/"}>
            <span className="text-2xl font-bold">Logo</span>
          </Link>
          <ul className="flex gap-24">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={`${link.href}`}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavBar />

      {/* Main Content */}
      <div className="grow">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-[#18191A]">
        <div className="section-layout py-16 text-white">
          <div className="grid gap-10 sm:grid-cols-4">
            <span className="text-3xl font-bold">Logo</span>
            <div className="flex flex-col gap-5">
              <p className="font-bold">Main Office</p>
              <p className="text-sm">Austria 82 12th Street, Office 14, LA</p>
              <p className="text-sm">10001234567</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold">Useful Links</p>
              <p className="text-sm">Our Services</p>
              <p className="text-sm">Our Team</p>
              <p className="text-sm">Portfolio</p>
              <p className="text-sm">Shortcodes</p>
              <p className="text-sm">Typography</p>
              <p className="text-sm">Privacy Policy</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold">Socials</p>
              <p className="text-sm">FaceBook</p>
              <p className="text-sm">Instagram</p>
              <p className="text-sm">Youtube</p>
              <p className="text-sm">WhatsApp</p>
            </div>
          </div>
          <p className="pt-14 font-light">Logo@2024, All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
