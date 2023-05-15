import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
	return (
		<div>
			<header className="container">
				<NavBar />
			</header>
			<main>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;
