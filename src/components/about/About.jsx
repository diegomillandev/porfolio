import "./About.css";
import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/curriculum-vitae.pdf";
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introducction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="img profile" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        As a frontend developer, I create captivating web
                        experiences with a year of experience and a passion for
                        UI/UX design.
                    </p>
                    <a download="" href={CV} className="button button__flex">
                        Download CV <i className="bx bx-file"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
