import React from "react";
import "./SearchContact.css";
function SearchContact()
{
    return (
      <div>
        <div className="mainsc">
          <div className="scntcontact">
            <div>
              <label>Enter Contact to Search</label>
              <br />
              <input type="text" id="inputsc" />
            </div>
            <button class="button-20">Search Contact</button>
          </div>
        </div>
      </div>
    );
}

export default SearchContact;