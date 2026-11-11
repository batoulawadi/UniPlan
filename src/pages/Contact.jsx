
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for contacting UniHub!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="page-container contact-page">

      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have a question or suggestion? We would love to hear from you!
        </p>
      </section>

      <div className="contact-content">

        <section className="contact-info">

          <h2>Get in Touch</h2>

          <p>
            If you have any questions, feedback, or suggestions about UniHub,
            feel free to contact us using the information below.
          </p>

          <div className="contact-info-card">
            <h3>Email Address</h3>
            <p>uniplan@gmail.com</p>
          </div>

          <div className="contact-info-card">
            <h3>Phone Number</h3>
            <p>0096170783127</p>
          </div>

          <div className="contact-info-card">
            <h3>Our Platform</h3>
            <p>UniHub - Your Academic Organization Platform</p>
          </div>

        </section>

        <section className="contact-form-section">

          <h2>Send Us a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>

            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Your Message</label>
            <textarea
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">Send Message</button>

          </form>

        </section>

      </div>

    </div>
  );
}

export default Contact;
