export type TNavbarItem = {
  path?: string;
  text?: string;
  childrens?: Array<{
    path?: string;
    text?: string;
  }>;
};

export type TNavbar = {
  items: Array<TNavbarItem>;
};
