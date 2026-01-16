import { CafeNavbar } from "./components/MainNavbar";
import { CafeFooter } from "./components/MainFooter";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CafeNavbar />
      {children}
      <CafeFooter />
    </div>
  );
}