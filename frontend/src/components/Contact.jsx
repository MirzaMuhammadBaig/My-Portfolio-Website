import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { useSelector } from "react-redux";
import { initialState } from "../redux/reducers/apiSlice";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const R_name = useSelector((state) => state.auth.name);
  const R_email = useSelector((state) => state.auth.email);
  const R_token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  const NAME = (e) => {
    setName(e.target.value);
  };
  const EMAIL = (e) => {
    setEmail(e.target.value);
  };
  const SUBJECT = (e) => {
    setSubject(e.target.value);
  };
  const MESSAGE = (e) => {
    setMessage(e.target.value);
  };

  const [loading, setLoading] = useState(false);

  const submitForm = async (data) => {
    data.preventDefault();
    setLoading(true);

    const obj = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      if (
        R_name === initialState.name ||
        R_email === initialState.email ||
        R_token === initialState.token
      ) {
        alert("You are not login");
        navigate("/signin");
      }

      const response = await axios({
        method: "POST",
        url: "https://bwd-server-utgj.vercel.app/sendmail",
        data: obj,
      });
      setLoading(false);
      console.log("response", response);
      alert("Thank you fo contacting, we will back you soon");
    } catch (err) {
      setLoading(false);
      console.log("error", err);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h4 className={styles.sectionHeadText}>Contact.</h4>

        <form onSubmit={submitForm} className="mt-4 flex flex-col gap-2">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Your Name</span>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={NAME}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={EMAIL}
              placeholder="What's your good email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Subject</span>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={SUBJECT}
              placeholder="What's your topic?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Your Message</span>
            <textarea
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={MESSAGE}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
