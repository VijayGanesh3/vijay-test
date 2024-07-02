import React from "react";
export const passwordPolicy = () => {
  return (
    <React.Fragment>
      <h6>Your password should contain: </h6>
      <ul style={{ fontSize: "12px" }}>
        <li>Minimum length of 8 character(s)</li>
        {/* <li>Max length of 16 characters</li> */}
        <li>Contains at least 1 number</li>
        <li>Contains at least 1 special character</li>
        {/* <li>{"Contains at least 1 special character (^ $ * . [ ] { } ( ) ? - ! " + '"' + " @ # % & / \ , > < ' : ; | _ ~ ` + =)"}</li> */}
        <li>Contains at least 1 uppercase letter</li>
        <li>Contains at least 1 lowercase letter</li>
      </ul>
    </React.Fragment>
  );
};
