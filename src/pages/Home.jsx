import { useState } from "react";
import { Link } from 'react-router-dom';
import Cookie from "../components/Cookie";
import { texts } from "../data";
import logo from "../images/logo.png";
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
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import imgContact from "../images/contact.webp";
import { SendEmail } from "../components/SendEmail";

const Home = ({ lang }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const stateDialog = (value) => { setOpenDialog(value); }

  const contactUs = () => {
    setOpenDialog(true);
  }
  return (
    <main className="page">
      <Cookie lang={lang} />
      <div className="page__anchors-wrap">
        <div className="page__anchors">
          <div><a href="/#home">{texts[lang].miMain}</a></div>
          <div><a href="/#about">{texts[lang].miAbout}</a></div>
          <div><a href="/#tech">{texts[lang].miTech}</a></div>
          <div><a href="/#oferta">{texts[lang].miOffer}</a></div>
          <div><a href="/#contact">{texts[lang].miContact}</a></div>
        </div>
      </div>
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
            <p style={{ marginBottom: "24px" }}>Regon 522427881</p>
            <p><a href="tel:+48886684189">tel. +48 886 684 189</a></p>
            <p>e-mail: <a href="mailto:danlexsspot@gmail.com">danlexsspot@gmail.com</a></p>
            <p style={{ marginBottom: "24px" }}><a href="https://danlexsspot.pl/">www.danlexsspot.pl</a></p>
            <p style={{ marginBottom: "24px" }}>
              <a href="https://www.facebook.com/profile.php?id=100095049682068"><FacebookIcon fontSize="large" /></a>
              <EmailIcon onClick={contactUs} fontSize="large" className="page__contact-email" />
            </p>
            <p><Link to="/privacy">{texts[lang].polpr}</Link></p>
          </div>
        </div>
        <div className="page__contact-img">
          <div className="page__contact-gr"></div>
          <img src={imgContact} alt={texts[lang].miContact} />
        </div>
      </article>
      {openDialog && <SendEmail open={openDialog} stateDialog={stateDialog} lang={lang} />}
    </main>
  )
}

export default Home;