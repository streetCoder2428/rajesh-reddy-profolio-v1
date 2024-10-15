import React, { useRef } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contacts = () => {
  const form = useRef(); // Create a ref for the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_3ba3wyr", // Your EmailJS service ID
        "template_1efaie8", // Your EmailJS template ID
        form.current, // Reference to the form
        "l4D22iUdOl4HQxXMD" // Your EmailJS public API key (User ID)
      )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      });

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>k.rajeshreddy2428@gmail.com</h5>
            <a href="mailto:k.rajeshreddy2428@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
