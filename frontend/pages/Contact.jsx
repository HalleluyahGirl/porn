import React from "react";
import Link from "react-dom";

const Contact = () => {
  return (
    <div>
      {/* create a contact page with a button, and a link to the home page, and have a rainbow background */}
      <div className="contactWrapper style={{ backgroundColor: 'red' }}">
        {/* this button will take you to the home page */}
        <Link href="/">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
