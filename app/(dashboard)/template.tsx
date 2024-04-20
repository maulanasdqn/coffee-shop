import { Sidebar } from "@/components/molecules/sidebar/sidebar";
import { FC, PropsWithChildren, ReactElement } from "react";

const DashboardTemplate: FC<PropsWithChildren> = (props): ReactElement => {
  const sidebarItems = [
    {
      path: "/dashboard",
      text: "Dashboard",
      icon: "ic:baseline-dashboard",
    },
    {
      path: "/dashboard/orders",
      text: "Orders",
      icon: "ic:baseline-shopping-cart",
    },
    {
      path: "/dashboard/products",
      text: "Products",
      icon: "ic:baseline-storefront",
    },
    {
      path: "/dashboard/users",
      text: "Users",
      icon: "ic:baseline-group",
    },
    {
      path: "/dashboard/settings",
      text: "Settings",
      icon: "ic:baseline-settings",
    },
  ];
  return (
    <section className="w-full h-full flex bg-rose-overlay min-h-screen">
      <Sidebar items={sidebarItems} />
      <div className="p-6 w-full">{props.children}</div>
    </section>
  );
};

export default DashboardTemplate;
