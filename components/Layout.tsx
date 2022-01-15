import { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout: FC = ({ children }) => {
	return (
		<>
			<div className="content">
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	)
}

export default Layout;