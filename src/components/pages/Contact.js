import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import WorkData from "../../workData.json";

export default function Contact() {
  if (WorkData.resume) {
    var sendemail = "mailto:" + WorkData.main.email;
    var github = WorkData.main.github;
    var linkedin = WorkData.main.linkedin;
  }

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("The email is invalid");
      return;
    }
    if (!name) {
      setErrorMessage("Please enter a valid name");
      return;
    }
    if (!message) {
      setErrorMessage("Please enter a valid message");
      return;
    }
    alert(`${name}, your email has been sent`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <section className="contact">
        <h2>Contact details</h2>
        <div className="contact-details">
          <p>{WorkData.main.contactmessage}</p>
          <ul>
            <li>
              Location: {WorkData.main.address.city},{" "}
              {WorkData.main.address.country}
            </li>
            <li>
              <a href={sendemail} rel="noopener noreferrer" target="_blank">
                {WorkData.main.email}
              </a>
            </li>
            <li>
              <a href={github} rel="noopener noreferrer" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href={linkedin} rel="noopener noreferrer" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact">
        <h2>Form</h2>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </section>
    </div>
  );
}
