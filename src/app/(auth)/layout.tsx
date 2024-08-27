import dynamic from "next/dynamic";
import type { ReactNode } from "react";
const LandingNavbar = dynamic(
  () => import("@/modules").then((module) => module.LandingNavbar),

  {
    ssr: false,
  },
);
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LandingNavbar />
      <div className="grid min-h-[calc(100vh-48px)] place-items-center ">{children}</div>
    </>
  );
};

export default AuthLayout;
