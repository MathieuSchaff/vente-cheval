import Header from "@/components/header/Header";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-4">{children}</div>
    </div>
  );
}

export default Layout;
