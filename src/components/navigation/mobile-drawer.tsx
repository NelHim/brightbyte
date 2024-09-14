import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import classNames from "classnames";
import { IoMenuOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../../data/fake-data";

export default function MobileDrawer() {
  return (
    <div className="sticky top-0 z-50 bg-white/95">
      <Menu
        as="div"
        className="flex w-1/2 items-center justify-between pl-2  sm:hidden"
      >
        <MenuButton className="inline-flex items-center gap-2 rounded-md px-3  py-1.5 text-4xl font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-200 data-[open]:bg-gray-200 data-[focus]:outline-1 data-[focus]:outline-white">
          <IoMenuOutline />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom start"
          className="mt-2 w-52 origin-top-right rounded-md border border-white/5 bg-primary p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {navLinks.map((link) => (
            <MenuItem key={link.href}>
              <NavLink
                to={`${link.href}`}
                className={({ isActive }) =>
                  classNames(
                    "block rounded-md py-1.5 px-3 data-[focus]:bg-white/10",
                    { "font-bold": isActive },
                  )
                }
              >
                {link.name}
              </NavLink>
            </MenuItem>
          ))}
        </MenuItems>
        <Link to={"/"} className="translate-x-1/2 text-xl font-bold">
          Logo
        </Link>
      </Menu>
    </div>
  );
}
