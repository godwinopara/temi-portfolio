import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
	return (
		<div>
			<a className="skipLink" href="#main-content">Skip to content</a>
			<header><NavBar /></header>
			<main id="main-content" tabIndex="-1">{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;
