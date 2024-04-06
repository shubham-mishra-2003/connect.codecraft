import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ebwx2qj",
        "template_zr8mp0l",
        {
          from_name: form.name,
          to_name: "shubham mishra",
          from_email: form.email,
          to_email: "shubhammishra3070@gmail.com",
          message: form.message
        },
        "NNzjOzVUd4H2JrXWs"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thankyou. I will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: ""
          });
        },
        error => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong !");
        }
      );
  };

  return (
    <div className="flex flex-col m-10">
      <h3 className="text-4xl font-bold font-serif text-gray-300 uppercase">contact</h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col w-full gap-8 bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border-2 p-5 border-gray-100"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Message</span>
          <textarea
            rows="7"
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Say Something"
            className="bg-gray-800 text-white py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium"
          />
        </label>

        <div className="flex items-center w-full justify-center">
          <button
            type="submit"
            className="outline-none text-lg w-full text-white bg-sky-700 p-3 font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
