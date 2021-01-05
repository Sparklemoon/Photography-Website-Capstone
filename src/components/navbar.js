import React from "react";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/gallery" activeClassName="nav-link-active">
            Gallery
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>


        </div>
        </div>
        <div className="right-side">
        PARKER JAMES PHOTOGRAPHY
      </div>
    </div>
        

      
   
  );
}

export default Navbar;


// import React from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { withRouter } from "react-router";
// import { NavLink } from "react-router-dom";

// const Navbar = props => {
//   const dynamicLink = (route, linkText) => {
//     return (
//       <div className="nav-link-wrapper">
//         <NavLink to={route} activeClassName="nav-link-active">
//           {linkText}
//         </NavLink>
//       </div>
//     );
//   };

//   const handleSignOut = () => {
//     axios
//       .delete("https://capstone-api-myra-james.herokuapp.com/user/delete", { withCredentials: true })
//       .then(response => {
//         if (response.status === 200) {
//           props.history.push("/");
//           props.handleSuccessfulLogout();
//         }
//         return response.data;
//       })
//       .catch(error => {
//         console.log("Error signing out", error);
//       });
//   };

//   return (
//     <div className="nav-wrapper">
//       <div className="left-side">
//         <div className="nav-link-wrapper">
//           <NavLink exact to="/" activeClassName="nav-link-active">
//             Home
//           </NavLink>
//         </div>

//         <div className="nav-link-wrapper">
//           <NavLink to="/gallery" activeClassName="nav-link-active">
//             Gallery
//           </NavLink>
//         </div>

//         <div className="nav-link-wrapper">
//           <NavLink to="/contact" activeClassName="nav-link-active">
//             Contact
//           </NavLink>
//         </div>

//         {props.loggedInStatus === "LOGGED_IN" ? (
//           dynamicLink("/page-manager", "Page Manager")
//         ) : null}
//       </div>

//       <div className="right-side">
//         PARKER JAMES PHOTOGRAPHY
//         {props.loggedInStatus === "LOGGED_IN" ? (
//           <a onClick={handleSignOut}>
//             <FontAwesomeIcon icon="sign-out-alt" />
//           </a>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default withRouter(Navbar);





