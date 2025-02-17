// import { Button } from "@heroui/button";
// import { Link } from "@heroui/link";
// import { useTheme } from "next-themes";
// import {
//   Navbar as HeroUINavbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
// } from "@heroui/navbar";
// import { link as linkStyles } from "@heroui/theme";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";

// export const Navbar = () => {
//   const { theme } = useTheme();

//   // Render desktop navigation items
//   const renderNavItems = () =>
//     siteConfig.navItems.map((item) => (
//       <NavbarItem key={item.href}>
//         <Link
//           className={clsx(
//             linkStyles({ color: "foreground" }),
//             "data-[active=true]:text-primary data-[active=true]:font-medium text-md font-semibold text-[#C0C0C0]"
//           )}
//           color="foreground"
//           href={item.href}
//         >
//           {item.label}
//         </Link>
//       </NavbarItem>
//     ));

//   // Render mobile navigation items
//   const renderMobileNavItems = () =>
//     siteConfig.navItems.map((item, index) => (
//       <NavbarMenuItem key={`${item.label}-${index}`}>
//         <Link
//           color={
//             index === 2
//               ? "primary"
//               : index === siteConfig.navItems.length - 1
//                 ? "danger"
//                 : "foreground"
//           }
//           href={item.href}
//           size="lg"
//         >
//           {item.label}
//         </Link>
//       </NavbarMenuItem>
//     ));

//   return (
//     <HeroUINavbar
//       maxWidth="xl"
//       position="sticky"
//       className="bg-[#151A18] top-0"
//       style={
//         theme === "dark"
//           ? {
//               backgroundImage: "url('/images/bg1.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }
//           : {}
//       }
//     >
//       {/* Logo Section */}
//       <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//         <NavbarBrand className="gap-3 max-w-fit">
//           <Link
//             className="flex justify-start items-center gap-1"
//             color="foreground"
//             href="/"
//           >
//             {/* <Logo /> */}
//             <img src="/images/logo.png" alt="" />
//             <h4 className="font-bold text-[#C0C0C0] ml-2">T-Stackz Rackz</h4>
//           </Link>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Desktop Navigation Items */}
//       <NavbarContent>
//         <div className="hidden lg:flex gap-4 justify-start ml-0">
//           {renderNavItems()}
//         </div>
//       </NavbarContent>

//       {/* Right-side Controls (Theme Switch & Login Button) */}
//       <NavbarContent
//         className="hidden lg:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         <NavbarItem className="hidden sm:flex gap-2">
//           <ThemeSwitch />
//         </NavbarItem>
//         <NavbarItem className="hidden md:flex">
//           <Button
//             isExternal
//             as={Link}
//             className="text-sm font-normal text-[#d8d7d7] bg-gradient-to-r from-[#B12533] to-[#CA4250]"
//             href="/"
//             variant="flat"
//           >
//             Join Now
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile Navigation Toggle */}
//       <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>

//       {/* Mobile Menu */}
//       <NavbarMenu>
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {renderMobileNavItems()}
//         </div>
//       </NavbarMenu>
//     </HeroUINavbar>
//   );
// };

import { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Navigation Items
  const navItems = [
    { to: "banner", label: "Home" },
    { to: "features", label: "Features" },
    { to: "liveMarket", label: "Live Market" },
    { to: "faq", label: "FAQ" },
    { to: "privacy", label: "Privacy Policy" },
  ];

  return (
    <nav className="bg-[#151A18] text-[#C0C0C0] fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <RouterLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <img src="/images/logo.png" alt="Logo" className="h-8" />
          T-Stackz Rackz
        </RouterLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-primary"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Right Side Controls */}
        <div className="hidden lg:flex items-center space-x-4">
          <RouterLink
            to="/join"
            className="px-4 py-2 text-sm font-normal text-white bg-gradient-to-r from-[#B12533] to-[#CA4250] rounded-md"
          >
            Join Now
          </RouterLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden px-6 bg-[#151A18] py-4 space-y-4 border-t border-gray-700"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer hover:text-primary"
                  onClick={toggleMenu}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <RouterLink
            to="#"
            className="inline-block px-4 py-2 text-sm font-normal text-white bg-gradient-to-r from-[#B12533] to-[#CA4250] rounded-md"
            onClick={toggleMenu}
          >
            Join Now
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
