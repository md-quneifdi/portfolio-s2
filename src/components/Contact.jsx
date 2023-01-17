import { createElement, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { content } from "../Content";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_54tyhbg",
        "template_6kyrmxs",
        form.current,
        "kxzYgCT5aCzUlYiI_"
      )
      .then(
        (result) => {
          console.log(result.text);
          // its clear all inputs fields values
          form.current.reset();
          // Success toast message
          toast.success("Email Send Successfully");
        },
        (error) => {
          console.log(error.text);
          // Error toast message
          toast.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-dark_primary text-white">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex lg:flex-row flex-col gap-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1.63}$"
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-white text-dark_primary self-start"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className=" flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a href={content.link} target="_blank" className="font-Poppins">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
