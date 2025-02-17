import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useTheme } from "next-themes";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const { theme } = useTheme();

  // Render desktop navigation items
  const renderNavItems = () =>
    siteConfig.navItems.map((item) => (
      <NavbarItem key={item.href}>
        <Link
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium text-md font-semibold text-[#C0C0C0]",
          )}
          color="foreground"
          href={item.href}
        >
          {item.label}
        </Link>
      </NavbarItem>
    ));

  // Render mobile navigation items
  const renderMobileNavItems = () =>
    siteConfig.navItems.map((item, index) => (
      <NavbarMenuItem key={`${item.label}-${index}`}>
        <Link
          color={
            index === 2
              ? "primary"
              : index === siteConfig.navItems.length - 1
                ? "danger"
                : "foreground"
          }
          href={item.href}
          size="lg"
        >
          {item.label}
        </Link>
      </NavbarMenuItem>
    ));

  return (
    <HeroUINavbar
      className="bg-[#151A18] top-0"
      maxWidth="xl"
      position="sticky"
      style={
        theme === "dark"
          ? {
              backgroundImage: "url('/images/bg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {/* Logo Section */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            <img alt="" src="/images/logo.png" />
            <h4 className="font-bold text-[#C0C0C0] ml-2">T-Stackz Rackz</h4>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation Items */}
      <NavbarContent>
        <div className="hidden lg:flex gap-4 justify-start ml-0">
          {renderNavItems()}
        </div>
      </NavbarContent>

      {/* Right-side Controls (Theme Switch & Login Button) */}
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-[#d8d7d7] bg-gradient-to-r from-[#B12533] to-[#CA4250]"
            href="/"
            variant="flat"
          >
            Join Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navigation Toggle */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {renderMobileNavItems()}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
