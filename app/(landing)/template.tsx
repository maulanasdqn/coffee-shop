import { Navbar } from "@/components/molecules/navbar/navbar";
import { FC, PropsWithChildren, ReactElement } from "react";

const LandingTemplate: FC<PropsWithChildren> = (props): ReactElement => {
  const navbarItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/best-seller",
      text: "Best Seller",
    },
    {
      path: "/pricing",
      text: "Pricing",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ];
  return (
    <main className="w-full flex flex-col bg-rose-overlay min-h-screen h-full px-4 md:px-8">
      <Navbar items={navbarItems} />
      {props.children}
    </main>
  );
};

export default LandingTemplate;
