import { APP_TITLE } from "@/lib/constants";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "A Next.js starter with T3 stack and Lucia auth.",
};

function LandingPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      {children}
      <div className="h-20"></div>
      <Footer />
    </>
  );
}

export default LandingPageLayout;
