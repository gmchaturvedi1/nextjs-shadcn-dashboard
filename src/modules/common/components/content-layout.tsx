import { Navbar } from "@/modules";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div className="container pt-2 pb-2 px-2 sm:px-4">{children}</div>
    </div>
  );
}
