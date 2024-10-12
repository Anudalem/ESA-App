import React from "react";
import Logo from "../assets/ESA-logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";

export default function App() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar className=" font-bold bg-black text-white ">
      <NavbarBrand>
        <img src={Logo} width={30} className="mr-3 text-black" alt="" />
        <p className="font-bold text-inherit">ESA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              // description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Consultance
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Online Course
            </DropdownItem>
            <DropdownItem
              // key="production_ready"
              // description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Digital Library
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              // description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              Tutoring
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              Home School
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}