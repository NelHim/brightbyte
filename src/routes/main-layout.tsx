import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowDropup } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";

import MobileNavBar from "../components/navigation/mobile-drawer";
import { navLinks } from "../data/fake-data";

export default function MainLayout() {
  return (
    <div>
      {/* Navigation bar */}
      <div className="fixed top-0 z-50 w-full bg-white">
        <div className="section-layout hidden justify-between py-4 sm:flex">
          <Link to={"/"}>
            <span className="text-2xl font-bold">BrightByte</span>
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
            <span className="text-3xl font-bold">BrightByte</span>
            <div className="flex flex-col gap-5">
              <Link to={"/"} className="font-bold">
                Main Office
              </Link>
              <Link to={"/"} className="text-sm">
                Kigali 12th Street, Office 14, KCT
              </Link>
              <Link to={"/"} className="text-sm">
                10001234567
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <Link to={"/"} className="font-bold">
                Useful Links
              </Link>
              <Link to={"/"} className="text-sm">
                Our Services
              </Link>
              <Link to={"/"} className="text-sm">
                Our Team
              </Link>
              <Link to={"/"} className="text-sm">
                Portfolio
              </Link>
              <Link to={"/"} className="text-sm">
                Shortcodes
              </Link>
              <Link to={"/"} className="text-sm">
                Typography
              </Link>
              <Link to={"/"} className="text-sm">
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold">Socials</p>
              <div className="flex gap-2">
                <FaFacebookF className="text-xl" />
                <FaInstagram className="text-xl" />
                <FaYoutube className="text-xl" />
                <FaWhatsapp className="text-xl" />
              </div>
            </div>
          </div>
          <p className="pt-14 font-light">
            Logo@{new Date().getFullYear()}, All Right Reserved.
          </p>
        </div>
      </footer>
      <a
        className="fixed bottom-5 right-5 bg-primary p-2 text-white sm:right-20 sm:text-3xl"
        href="#"
      >
        <IoIosArrowDropup />
      </a>
    </div>
  );
}
