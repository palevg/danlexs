import logo from "../images/logo.png";

const Footer = () => {

  return (
    <footer className="footer bg-gradient">
      <div className="footer__owner">
        <img src={logo} alt="logo" />
        <span>© 2023 Danlexs Spot Kompozyt</span>
      </div>
      <div>Developed by <a className='menu-link' href="https://paliychuk.pp.ua/" target="_blank" rel="noreferrer">palevg</a></div>
    </footer>
  )
}

export default Footer;