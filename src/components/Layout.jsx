import Header from "./Header";
import AsideNav from "./AsideNav";
import PropTypes from "prop-types";
import "../styles/layout.css";

function Layout({ children }) {
  return (
    <div className="Ss-container">
      <Header />
      {children}
      <AsideNav />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
