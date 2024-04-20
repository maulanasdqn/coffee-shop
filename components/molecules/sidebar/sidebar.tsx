"use client";
import { Icon } from "@iconify/react";
import { FC, ReactElement } from "react";

type TSidebar = {
  items: Array<{
    text: string;
    icon: string;
    path?: string;
    childrens?: Array<{
      text: string;
      path?: string;
    }>;
  }>;
};

export const Sidebar: FC<TSidebar> = (props): ReactElement => {
  return (
    <aside className="w-1/4 h-full min-h-screen bg-rose-base flex flex-col gap-y-4 p-4 justify-between">
      <section className="flex flex-col gap-y-4 w-full">
        <div className="h-full flex gap-x-4 items-center w-full">
          <Icon width={40} className="text-rose" icon="simple-icons:netcup" />
          <h1 className="text-2xl font-semibold text-rose-text">Coffe Shop</h1>
        </div>

        <div className="h-[60px] rounded-lg flex items-center w-full bg-rose-surface">
          <li className="text-lg font-semibold gap-x-4 text-rose-text cursor-pointer hover:bg-rose-surface py-2 px-4 rounded-lg flex items-center">
            <Icon width={30} icon={"mingcute:user-4-fill"} />
            Admin Gudang
          </li>
        </div>

        <ul className="flex flex-col gap-y-4 mt-4 cursor-pointer">
          {props?.items?.map((nav, key) => (
            <li
              key={key}
              className="text-lg font-semibold gap-x-4 text-rose-text cursor-pointer hover:bg-rose-surface py-2 px-4 rounded-lg flex items-center"
            >
              <Icon icon={nav?.icon} />
              {nav?.text}
            </li>
          ))}
        </ul>
      </section>

      <div className="h-[60px] rounded-lg flex items-center w-full bg-rose-surface">
        <li className="text-lg font-semibold gap-x-4 text-rose-text cursor-pointer hover:bg-rose-surface py-2 px-4 rounded-lg flex items-center">
          <Icon icon={"ic:baseline-logout"} />
          Logout
        </li>
      </div>
    </aside>
  );
};
