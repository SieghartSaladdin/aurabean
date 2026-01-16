import { CafeNavbar } from "./components/cafe/CafeNavbar";
import { CafeFooter } from "./components/cafe/CafeFooter";

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