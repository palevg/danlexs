import { texts } from "../data";

const TechSpray = ({ lang }) => {

  return (
    <div className="page__privacy">
      <h2>{texts[lang].te3h1}</h2>
      <p>{texts[lang].te3p1}.</p>
      <p>{texts[lang].te3p2}.</p>
      <p>{texts[lang].te3p3}.</p>
    </div>
  )
}

export default TechSpray;