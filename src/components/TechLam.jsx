import { texts } from "../data";

const TechLaminat = ({ lang }) => {

  return (
    <div className="page__privacy">
      <h2>{texts[lang].te1h1}</h2>
      <p>{texts[lang].te1p1}.</p>
      <p>{texts[lang].te1p2}.</p>
      <p>{texts[lang].te1p3}.</p>
    </div>
  )
}

export default TechLaminat;