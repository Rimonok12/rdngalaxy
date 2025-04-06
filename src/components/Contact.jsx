import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xzxgg8t', // e.g., service_abc123
        'template_qt20d93', // e.g., template_xyz456
        form.current,
        'TECWOtC5n3Q4FCpDt' // e.g., _abc123XYZ
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message.');
        }
      );

    e.target.reset(); // reset form
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="card">
        <h2>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-coffee" href="#icon-coffee" />
          </svg>
          Regular
        </h2>

        <label className="input">
          <input
            className="input__field"
            type="text"
            name="user_email"
            placeholder=" "
            required
          />
          <span className="input__label">Email</span>
        </label>

        <label className="input">
          <input
            className="input__field"
            type="text"
            name="message"
            placeholder=" "
            required
          />
          <span className="input__label">Message</span>
        </label>

        <div className="button-group">
          <button type="submit">Send</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
