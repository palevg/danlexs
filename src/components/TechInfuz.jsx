import { texts } from "../data";

const TechInfusion = ({ lang }) => {

  return (
    <div className="page__privacy">
      <h2>{texts[lang].te2h1}</h2>
      <p>{texts[lang].te2p1}.</p>
    </div>
  )
}

export default TechInfusion;