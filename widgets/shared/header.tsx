"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, ChevronUp, Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const page = document.getElementById("page");
    if (openMenu) {
      page?.classList.add("!overflow-hidden");
      page?.classList.add("fixed");
    } else {
      page?.classList.remove("!overflow-hidden");
      page?.classList.remove("fixed");
    }
  }, [openMenu]);

  return (
    <header className="flex justify-between items-center font-roboto font-light text-sm z-50">
      <Image src="/icon.svg" alt="icon" width={40} height={40} />
      <div className="gap-4 items-center flex">
        <Link href="#individual" className="outline-button small">
          Individual
        </Link>
        <Link href="#bussiness">Bussiness</Link>
      </div>
      <NavigationMenu className="gap-4 hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:!bg-primaryDark hover:!text-secondary font-light">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuLink asChild>
          <Link href="#pricing">Privacy</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link href="#contact">Help Center</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link href="#blog">Blog</Link>
        </NavigationMenuLink>
      </NavigationMenu>
      <div className="gap-4 items-center hidden md:flex">
        <Link href="#" className="link-button">
          Whatsapp Web
        </Link>
        <Link href="#" className="button tertiary">
          Download <Download className="w-4 h-4" />
        </Link>
      </div>

      <button
        className="button tertiary icon md:!hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="w-4 h-4" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`menu-mobile absolute z-100 top-0 ${
          openMenu ? "right-0" : "right-[calc(-100vw)]"
        } bg-darkGreen min-h-screen w-screen md:max-w-[500px] transition-all duration-300 p-4 flex flex-col gap-6 text-lg`}
      >
        <button
          className="ghost-button secondary icon ml-auto"
          onClick={() => setOpenMenu(false)}
        >
          <X className="w-4 h-4" />
        </button>

        <Collapsible onOpenChange={setFeaturesOpen}>
          <CollapsibleTrigger className="flex gap-2 items-center cursor-pointer">
            Features
            {featuresOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-darkGreenLight p-2 mt-6 rounded-md">
            <ul className="grid gap-3">
              {components.map((component, index) => (
                <Link key={`mobile-features-${index}`} href={component.href}>
                  <div className="text-sm leading-none font-medium">
                    {component.title}
                  </div>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    {component.description}
                  </p>
                </Link>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
        <Link href="#pricing">Privacy</Link>
        <Link href="#contact">Help Center</Link>
        <Link href="#blog">Blog</Link>
        <Link href="#blog" className="link-button">Whatsapp Web</Link>
        <Link href="#blog" className="button tertiary">Download <Download className="w-4 h-4" /></Link>
      </div>
    </header>
  );
};

export default Header;

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
