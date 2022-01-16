import { FC } from "react";
import Appbar from "./Appbar";

export const Layout: FC = ({ children }) => {
	return (
    <div className="dark:bg-[#10142c] dark:text-white">
      <Appbar />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;