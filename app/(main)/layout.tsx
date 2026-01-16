import { CafeNavbar } from "./components/MainNavbar";
import { CafeFooter } from "./components/MainFooter";
import { ChatPanel } from "./components/ChatPanel";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CafeNavbar />
      {children}
      <ChatPanel />
      <CafeFooter />
    </div>
  );
}