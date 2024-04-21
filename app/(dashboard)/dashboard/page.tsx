import type { NextPage } from "next";
import type { ReactElement } from "react";

const DashboardPage: NextPage = (): ReactElement => {
  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="text-4xl text-rose-text">Dashboard</h1>

      <div className="flex w-full gap-x-4 mt-8 items-center justify-between">
        <div className="w-[200px] rounded-lg bg-rose h-[120px]" />
        <div className="w-[200px] rounded-lg bg-rose h-[120px]" />
        <div className="w-[200px] rounded-lg bg-rose h-[120px]" />
        <div className="w-[200px] rounded-lg bg-rose h-[120px]" />
        <div className="w-[200px] rounded-lg bg-rose h-[120px]" />
        <div className="w-[200px] rounded-lg bg-rose h-[120px]" />
      </div>

      <div className="w-full rounded-lg bg-rose h-[300px]" />

      <div className="flex gap-x-8">
        <div className="w-full rounded-lg bg-rose h-[300px]" />
        <div className="w-full rounded-lg bg-rose h-[300px]" />
      </div>
    </div>
  );
};

export default DashboardPage;
