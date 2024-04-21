import { FC, PropsWithChildren, ReactElement } from "react";

const AuthTemplate: FC<PropsWithChildren> = (props): ReactElement => {
  return (
    <main className="w-full h-full min-h-screen bg-rose-surface flex justify-center items-center">
      <section className="h-[600px] w-1/2 bg-rose-overlay rounded-xl p-8">
        {props.children}
      </section>
    </main>
  );
};

export default AuthTemplate;
