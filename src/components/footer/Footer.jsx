import "./Footer.css";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p className="footer">{`© ${year} Build by Diego Millan.`}</p>
        </footer>
    );
};

export default Footer;
