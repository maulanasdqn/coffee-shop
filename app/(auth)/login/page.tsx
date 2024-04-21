import { Button, InputText } from "@/components/atoms";
import type { NextPage } from "next";

const AuthLoginPage: NextPage = () => {
  return (
    <form className="w-full flex flex-col gap-y-8 h-full items-center justify-center">
      <h1 className="text-4xl text-rose-text font-bold">
        hey yoo welcome back!
      </h1>
      <section className="flex flex-col gap-y-5 w-1/2">
        <InputText
          type="email"
          name="email"
          placeholder="example@ex.com"
          status="default"
        />
        <InputText
          type="password"
          name="password"
          placeholder="***********"
          status="default"
        />

        <Button size="md">Login Now</Button>
      </section>
    </form>
  );
};

export default AuthLoginPage;
