import React from "react";
import { texts } from "../data";
import { TextField, Box, MenuItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import imgStart from "../images/start.webp";
import imgAbout from "../images/about.png";
import imgHLU from "../images/hlu.jpg";
import imgInfus from "../images/infusion.jpg";
import imgNapyl from "../images/napyl.jpg";
import imgKabin from "../images/kabin.jpg";
import imgElem from "../images/element.png";
import imgWagon from "../images/wagon.jpg";
import imgSilos from "../images/silos.jpg";
import imgHigien from "../images/higien.jpg";
import imgZabaw from "../images/zabaw.jpg";
import imgContact from "../images/contact.webp";
import logo from "../images/logo.png";

const Home = () => {
  const [lang, setLang] = React.useState(0);

  const handleMenuClick = () => {
    const cb = document.getElementById("side-menu");
    if (cb.checked) cb.checked = false;
  }

  const languages = [
    { code: 'PL', id: 0, text: 'Polski' },
    { code: 'DE', id: 1, text: 'Deutsch' },
    { code: 'GB', id: 2, text: 'English' }
  ];

  return (
    <div className="page">
      <a href="anchor" name="home"></a>
      <header className="header bg-gradient">
        <div>
          <div className="header__height"></div>
          <input className="header__side-menu" type="checkbox" id="side-menu" />
          <label className="header__hamb" htmlFor="side-menu"><span className="header__hamb-line"></span></label>
          <nav className="header__nav">
            <ul className="header__menu" onClick={handleMenuClick}>
              <li><a href="#home">{texts[lang].miHome}</a></li>
              <li><a href="#about">{texts[lang].miAbout}</a></li>
              <li><a href="#tech">{texts[lang].miTech}</a></li>
              <li><a href="#oferta">{texts[lang].miOffer}</a></li>
              <li><a href="#contact">{texts[lang].miContact}</a></li>
            </ul>
          </nav>
        </div>
        <div className="header__lang">
          <TextField
            select
            defaultValue="PL"
            variant="standard"
            value={lang}
            onChange={(event) => { setLang(event.target.value) }}
            InputProps={{ disableUnderline: true, sx: { color: "white" } }}
          >
            {languages.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }} >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.text}
                </Box>
              </MenuItem>
            ))}
          </TextField>
        </div>
      </header>
      <main>
        <article className="page__start bg-gradient">
          <div>
            <div className="page__start-name">
              <img className="page__start-logo" src={logo} alt="logo" />
              <h1 className="page__start-header">Danlexs Spot Kompozyt</h1>
            </div>
            <div className="page__start-descr">{texts[lang].mProj}</div>
          </div>
          <div>
            <img className="page__start-image" src={imgStart} alt="Danlexs Spot" />
          </div>
        </article>
        <a href="anchor" name="about"></a>
        <article className="page__about">
          <h3>{texts[lang].miAbout.toUpperCase()}</h3>
          <div>
            <img className="page__start-image" src={imgAbout} alt={texts[lang].miAbout} />
            <div className="page__about-desc">{texts[lang].aboutDesc}</div>
          </div>
        </article>
        <a href="anchor" name="tech"></a>
        <article className="page__tech bg-gradient">
          <h3>{texts[lang].teHead}</h3>
          <div>
            <div className="page__tech-block">
              <figure>
                <img src={imgHLU} alt={texts[lang].te1h} />
              </figure>
              <h5>{texts[lang].te1h}</h5>
              <div>{texts[lang].te1desc}</div>
            </div>
            <div className="page__tech-block">
              <figure>
                <img src={imgInfus} alt={texts[lang].te2h} />
              </figure>
              <h5>{texts[lang].te2h}</h5>
              <div>{texts[lang].te2desc}</div>
            </div>
            <div className="page__tech-block">
              <figure>
                <img src={imgNapyl} alt={texts[lang].te3h} />
              </figure>
              <h5>{texts[lang].te3h}</h5>
              <div>{texts[lang].te3desc}</div>
            </div>
          </div>
        </article>
        <a href="anchor" name="oferta"></a>
        <article className="page__offer bg-gradient">
          <h3>{texts[lang].miOffer.toUpperCase()}</h3>
          <div>
            <div>
              <figure className="page__offer-fig">
                <img className="page__offer-img_h" src={imgKabin} alt={texts[lang].of1} />
              </figure>
              <div className="page__offer-desc">{texts[lang].of1}</div>
            </div>
            <div>
              <figure className="page__offer-fig">
                <img className="page__offer-img_h" src={imgElem} alt={texts[lang].of2} />
              </figure>
              <div className="page__offer-desc">{texts[lang].of2}</div>
            </div>
            <div>
              <figure className="page__offer-fig">
                <img className="page__offer-img_h" src={imgWagon} alt={texts[lang].of3} />
              </figure>
              <div className="page__offer-desc">{texts[lang].of3}</div>
            </div>
            <div>
              <figure className="page__offer-fig2">
                <img className="page__offer-img_h" src={imgSilos} alt={texts[lang].of4} />
              </figure>
              <div className="page__offer-desc">{texts[lang].of4}</div>
            </div>
            <div>
              <figure className="page__offer-fig2">
                <img className="page__offer-img_w" src={imgHigien} alt={texts[lang].of5} />
              </figure>
              <div className="page__offer-desc">{texts[lang].of5}</div>
            </div>
            <div>
              <figure className="page__offer-fig">
                <img className="page__offer-img_h" src={imgZabaw} alt={texts[lang].of6} />
              </figure>
              <div className="page__offer-desc">{texts[lang].of6}</div>
            </div>
          </div>
        </article>
        <article className="page__about">
          <h3>{texts[lang].prHead}</h3>
          <p>{texts[lang].prReas1}</p>
          <p>{texts[lang].prReas2}</p>
          <p>{texts[lang].prReas3}</p>
        </article>
        <a href="anchor" name="contact"></a>
        <article className="page__contact">
          <div className="page__contact-text">
            <h3>{texts[lang].miContact}</h3>
            <hr />
            <div>
              <p>Danlexs Spot</p>
              <p>{texts[lang].opf}</p>
              <p>{texts[lang].str} Świeradowska 47</p>
              <p>02-662 {texts[lang].city}</p>
              <p>{texts[lang].country}</p>
              <p><span>NIP 5213974332</span><span style={{ marginLeft: "24px" }}>KRS 0000979615</span></p>
              <p style={{ marginBottom: "32px" }}>Regon 522427881</p>
              <p><a href="tel:+48886684189">tel. +48 886 684 189</a></p>
              <p>e-mail: <a href="mailto:danlexsspot@gmail.com">danlexsspot@gmail.com</a></p>
              <p style={{ marginBottom: "32px" }}><a href="https://danlexsspot.pl/">www.danlexsspot.pl</a></p>
              <p><a href="https://www.facebook.com/profile.php?id=100095049682068"><FacebookIcon fontSize="large" /></a></p>
            </div>
          </div>
          <div className="page__contact-img">
            <div className="page__contact-gr"></div>
            <img src={imgContact} alt={texts[lang].miContact} />
          </div>
        </article>
      </main>
      <footer className="footer bg-gradient">
        <div className="footer__owner">
          <img src={logo} alt="logo" />
          <span>© 2023 Danlexs Spot Kompozyt</span>
        </div>
        <div>Developed by <a className='menu-link' href="https://paliychuk.pp.ua/" target="_blank" rel="noreferrer">palevg</a></div>
      </footer>
    </div>
  )
}

export default Home;