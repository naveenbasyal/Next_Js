import Navbar from "@/components/Navbar";
import { sendContactForm } from "lib/api";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };

const contact = () => {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    await sendContactForm(values);
  };
  return (
    <>
      <Head>
        <title>Contact | Naveen Basyal</title>
      </Head>
      <Navbar />
      <div className="container contact ">
        <h1 className="text-center">Contact Us</h1>
        <div className="row">
          {/* -------------------Image--------------- */}
          <div className="right_side col-lg-5 p-5 ">
            <Image src="/contact.gif" alt="contact img" className="img-fluid" />
          </div>
          {/* ---------------------Form ------------------- */}
          <div className="col-lg-6 left_side mx-4 ">
            <form method="post" onSubmit={onSubmit}>
              <div className="form-row shadow-in">
                <div className="col-lg-10 mb-3">
                  <label htmlhtmlFor="validationDefault01">First name</label>
                  <input
                    type="text"
                    name="name"
                    className="inputs shadow-out "
                    placeholder="ex: Ryan Reynolds"
                    id="validationDefault01"
                    value={values.name}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-10 mb-3">
                  <label htmlFor="validationDefault02">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="inputs shadow-out "
                    id="validationDefault02"
                    placeholder="ex: yourname@gmail.com"
                    value={values.email}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-10 mb-3">
                  <label htmlFor="validationDefault03">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="inputs shadow-out "
                    id="validationDefault03"
                    placeholder="enter the subject"
                    value={values.subject}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-10 mb-3">
                  <label htmlFor="validationDefault02">Message</label>
                  <textarea
                    rows={4}
                    type="text"
                    name="message"
                    className="inputs shadow-out "
                    id="validationDefault01"
                    placeholder="enter the message"
                    value={values.message}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="shadow-in checkbox"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                </div>
                <button
                  className="formBtn shadow-out"
                  type="submit"
                  // disabled={
                  //   !values.name ||
                  //   !values.email ||
                  //   !values.subject ||
                  //   !values.message
                  // }
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
