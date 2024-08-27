import dynamic from "next/dynamic";

interface Props {
  children: React.ReactNode;
}

const AdminPanelLayout = dynamic(
  () => import("@/modules").then((module) => module.AdminPanelLayout),

  {
    ssr: false,
  },
);

export default function DashboardLayout({ children }: Props) {
  return (
    <AdminPanelLayout>
      {/* <VerificiationWarning /> */}
      <div>{children}</div>
    </AdminPanelLayout>
    // <div className="container min-h-[calc(100vh-180px)] px-2 pt-6 md:px-4">
    //   <div className="flex flex-col gap-6 md:flex-row lg:gap-10">
    //  <DashboardNav className="flex flex-shrink-0 gap-2 md:w-48 md:flex-col lg:w-80" /> */}

    //   </div>
    // </div>
  );
}
