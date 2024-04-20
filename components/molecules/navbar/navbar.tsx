"use client";
import type { FC, ReactElement } from "react";
import { TNavbar } from "./navbar.type";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/atoms/button";

export const Navbar: FC<TNavbar> = (props): ReactElement => {
  return (
    <nav
      data-testid="navbar"
      className="md:p-4 p-2 py-4 bg-opacity-90 backdrop-blur-md flex items-center bg-rose-overlay sticky top-0 w-full justify-between"
    >
      <div className="flex items-center gap-x-10 w-full">
        <figure className="flex items-center gap-x-2 w-1/4">
          <figcaption className="font-bold md:text-lg text-rose-foam">
            Coffe Shop
          </figcaption>
        </figure>

        <ul className="md:flex hidden items-center w-full gap-x-5">
          {props?.items?.map((nav, key) => (
            <li key={key} className="p-3">
              {nav?.childrens ? (
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <span className="text-md text-rose-text font-semibold">
                    {nav.text}
                  </span>
                  <Icon icon="fluent:chevron-down-16-filled" />
                </div>
              ) : (
                <Link
                  className="text-md font-semibold text-rose-text hover:text-rose-gold"
                  href={nav.path!}
                >
                  {nav.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex hidden items-center gap-x-4 w-full justify-end">
        <Button size="md">Get Started</Button>
        <Button variant="success" size="md">
          <Icon icon="akar-icons:moon-fill" width="25px" />
        </Button>
      </div>

      <div className="flex md:hidden items-center gap-x-8 w-full justify-end">
        <Icon
          icon="mingcute:menu-fill"
          width="30px"
          className="cursor-pointer text-rose-love"
        />
      </div>
    </nav>
  );
};
