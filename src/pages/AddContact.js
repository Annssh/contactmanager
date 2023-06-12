import React from "react";
import "./AddContact.css"
function AddContact()
{
    return (
      <div className="mainac">
        <div className="addcontact">
          <div>
            <label>Enter Contact</label>
            <br />
            <input type="text" id="inputac" />
          </div>
          <div>
            <label>Enter Message</label>
            <br />
            <input type="text" id="inputac"/>
          </div>
          <button class="button-20">Add Contact</button>
        </div>
      </div>
    );
}

export default AddContact;