import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "elyakoubi.ouassima@gmail.com" },
    { logo: "logo-whatsapp", text: "+212 642 013 779" },
    { logo: "location", text: "Tetouan, Morocco" },
  ];

  // State to manage form inputs and status messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /* // Email existence validation function
  const validateEmailExistence = async (email) => {
    try {
      const apiKey = "ema_live_zQiNd3gKNvmAsbXU3Lq9Cag3JY2SdX3YMoWOeZDf"; // Use a secure way to store API key
      const response = await fetch(
        `https://api.emailvalidation.io/?email=${email}&apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();

      // Check if the email is valid (or check other status fields based on the response)
      return result.isValid; // Assuming the result object has `isValid` field
    } catch (error) {
      console.error("Error verifying email:", error);
      return false; // Return false in case of an error
    }
  }; */

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Input validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Validate email existence via API
    /* const isEmailValid = await validateEmailExistence(formData.email);
    if (!isEmailValid) {
      setStatus("The email address does not exist or is invalid.");
      return;
    } */

    // Send email via EmailJS
    try {
      const serviceID = "service_7i64236";
      const templateID = "template_ofhaj7f";
      const publicKey = "Obl8qMB5xwa45_BMp";

      const emailParams = {
        to_name: "Ouassima El Yakoubi", // Your name or static
        from_name: formData.name, // The user's name
        reply_to: formData.email, // The user's email (reply-to)
        from_email: formData.email, // The user's email
        message: formData.message, // The message content
      };

      await emailjs.send(serviceID, templateID, emailParams, publicKey);

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-[#E08FBA]">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form
            className="flex flex-col flex-1 gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-fit bg-[#E08FBA] text-white"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-[#E08FBA] rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
        {status && (
          <p
            className={`mt-4 ${status.includes("success") ? "text-green-500" : "text-red-500"}`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
