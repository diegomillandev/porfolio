const Social = () => {
    const socialMedia = {
        twitter: "https://twitter.com/Diegomillandev",
        linkedin: "https://www.linkedin.com/in/diegomillandev/",
        github: "https://github.com/diegomillandev",
    };

    const iconSocialMedia = {
        "uil-twitter-alt": "uil-twitter",
        "uil-twitter": "uil-twitter-alt",
        "uil-linkedin-alt": "uil-linkedin",
        "uil-linkedin": "uil-linkedin-alt",
        "uil-github-alt": "uil-github",
        "uil-github": "uil-github-alt",
    };

    const changeIcon = (e) => {
        const { target: icon } = e;
        const iconClass = icon.getAttribute("class").split(" ")[1];

        icon.classList.remove(iconClass);
        icon.classList.add(
            iconSocialMedia[iconClass] ? iconSocialMedia[iconClass] : iconClass
        );
    };

    return (
        <div className="home__social">
            <a
                href={socialMedia.twitter}
                className="home__social-icon"
                rel="noreferrer"
                target="_blank"
            >
                <i
                    onMouseEnter={(e) => changeIcon(e)}
                    onMouseLeave={(e) => changeIcon(e)}
                    className="uil uil-twitter-alt"
                ></i>
            </a>
            <a
                href={socialMedia.linkedin}
                rel="noreferrer"
                className="home__social-icon"
                target="_blank"
            >
                <i
                    onMouseEnter={(e) => changeIcon(e)}
                    onMouseLeave={(e) => changeIcon(e)}
                    className="uil uil-linkedin-alt"
                ></i>
            </a>
            <a
                href={socialMedia.github}
                rel="noreferrer"
                className="home__social-icon"
                target="_blank"
            >
                <i
                    onMouseEnter={(e) => changeIcon(e)}
                    onMouseLeave={(e) => changeIcon(e)}
                    className="uil uil-github-alt"
                ></i>
            </a>
        </div>
    );
};

export default Social;
