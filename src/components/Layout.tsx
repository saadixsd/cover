import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import QuickExit from "./QuickExit";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <QuickExit />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
