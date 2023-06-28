import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const [inputNameError, setInputNameError] = useState(false);
    const [inputEmailError, setInputEmailError] = useState(false);
    const [inputMessageError, setInputMessageError] = useState(false);

    const handSubmit = (e) => {
        e.preventDefault();
        console.log(inputName, inputEmail, inputMessage);

        if (inputName === "" || inputEmail === "" || inputMessage === "") {
            if (inputName === "") {
                setInputNameError(true);
            }
            if (inputEmail === "") {
                setInputEmailError(true);
            }
            if (inputMessage === "") {
                setInputMessageError(true);
            }

            setTimeout(() => {
                setInputNameError(false);
                setInputEmailError(false);
                setInputMessageError(false);
            }, 1500);

            return;
        }
        setInputName("");
        setInputEmail("");
        setInputMessage("");
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">
                                diegomillandev@gmail.com
                            </span>

                            <a
                                href="mailto:diegomillandev@gmail.com"
                                className="contact__button"
                            >
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">
                                +57 318-391-8701
                            </span>

                            <a
                                href="https://api.whatsapp.com/send?phone=+3183918701&text=Hello, more information!"
                                target="_blank"
                                rel="noreferrer"
                                className="contact__button"
                            >
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        {/* <div className="contact__card">
                            <i className="bx bx contact__card-icon"></i>
                            <h3 className="contact__card-title"></h3>
                            <span className="contact__card-data"></span>

                            <a href="" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div> */}
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me</h3>

                    <form className="contact" onSubmit={handSubmit}>
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className={
                                    inputNameError
                                        ? "contact__form-input error"
                                        : "contact__form-input"
                                }
                                name="name"
                                id="name"
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                            />
                            <label
                                htmlFor="name"
                                className={
                                    inputName === ""
                                        ? "contact__form-tag"
                                        : "contact__form-tag active"
                                }
                            >
                                Name
                            </label>
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className={
                                    inputEmailError
                                        ? "contact__form-input error"
                                        : "contact__form-input"
                                }
                                name="email"
                                id="email"
                                value={inputEmail}
                                onChange={(e) => setInputEmail(e.target.value)}
                            />
                            <label
                                htmlFor="email"
                                className={
                                    inputEmail === ""
                                        ? "contact__form-tag"
                                        : "contact__form-tag active"
                                }
                            >
                                Email
                            </label>
                        </div>

                        <div className="contact__form-div">
                            <textarea
                                className={
                                    inputMessageError
                                        ? "contact__form-textarea error"
                                        : "contact__form-textarea "
                                }
                                name="message"
                                id="message"
                                value={inputMessage}
                                onChange={(e) =>
                                    setInputMessage(e.target.value)
                                }
                            ></textarea>
                            <label
                                htmlFor="message"
                                className={
                                    inputMessage === ""
                                        ? "contact__form-tag"
                                        : "contact__form-tag active"
                                }
                            >
                                Message
                            </label>
                        </div>

                        <button className="button button__flex send__button-contact">
                            Send Message{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="button__icon"
                                fill="var(--container-color)"
                            >
                                <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                                <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
