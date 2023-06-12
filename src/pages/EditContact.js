import React from "react";
import "./EditContact.css";
function EditContact()
{
    return (
      <div>
        <div className="mainec">
          <div className="eccontact">
            <div>
              <label>Enter Contact</label>
              <br />
              <input type="text" id="inputec" />
            </div>
            <div>
              <label>Enter Message</label>
              <br />
              <input type="text" id="inputec" />
            </div>
            <button class="button-20">Edit Contact</button>
          </div>
        </div>
      </div>
    );
}

export default EditContact;