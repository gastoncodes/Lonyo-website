/*
  Importing assets 
*/
import Logo from "../../Assets/Logo.png";

/*
Imports from css
*/
import "../Header/Header.css";

export default () => {
  return (
    <>
      <div className="header-1">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="details">
          <p>Home</p>
          <p>AboutUs</p>
          <p>Lonyo-Fuel</p>
          <p>Our E-wallet</p>
          <p>Blogs</p>
        </div>
      </div>
    </>
  );
};
