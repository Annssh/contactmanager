import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header()
{
    return (
      <div className="header">
        <h1>Contact Manager</h1>
        <div className="headercntnt">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            All Contacts
          </Link>
        </div>
        <div className="headercntnt">
          <Link to={"/searchcontact"} style={{ textDecoration: "none" }}>
            Search Contact
          </Link>
        </div>
        <div className="headercntnt">
          <Link to={"/addcontact"} style={{ textDecoration: "none" }}>
            Add Contact
          </Link>
        </div>
        <div className="headercntnt">
          <Link to={"/editcontact"} style={{ textDecoration: "none" }}>
            Edit Contacts
          </Link>
        </div>
      </div>
    );
}

export default Header;