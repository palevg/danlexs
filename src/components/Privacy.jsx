import { texts } from "../data";

const Privacy = ({ lang }) => {

  return (
    <div className="page__privacy">
      <h2>{texts[lang].polpr.toUpperCase()} {texts[lang].ppServ.toUpperCase()}<br />www.danlexsspot.pl</h2>
      <p>{texts[lang].pp01} <span className="highlight">Danlexs Spot {texts[lang].opf}</span>{texts[lang].pp02}. {texts[lang].pp03} <span className="highlight">www.danlexsspot.pl</span> {texts[lang].pp04}. <span className="highlight">Danlexs Spot {texts[lang].opf}</span>{texts[lang].pp05}.</p>
      <p>{texts[lang].pp06} <em>({texts[lang].pp07})</em>. {texts[lang].pp08} <span className="highlight">www.danlexsspot.pl</span> <em>({texts[lang].pp09})</em>, {texts[lang].pp10}.</p>
      <p>{texts[lang].pp11} <span className="highlight">www.danlexsspot.pl</span> {texts[lang].pp12}.</p>
      <p>{texts[lang].pp13} <span className="highlight">www.danlexsspot.pl</span> {texts[lang].pp14} <span className="highlight">Danlexs Spot {texts[lang].opf} {texts[lang].str}. Świeradowska 47, 02-662 {texts[lang].city}, {texts[lang].country}, NIP 5213974332</span> <em>({texts[lang].pp15})</em>.</p>
      <ol type="I">
        <li>
          <h4>{texts[lang].pp16}</h4>
          <p>{texts[lang].pp17} <span className="highlight">www.danlexsspot.pl</span> {texts[lang].pp18}.</p>
          <p>{texts[lang].pp19}.</p>
          <p>{texts[lang].pp20}.</p>
        </li>
        <li>
          <h4>{texts[lang].pp21}</h4>
          <ol>
            <li><strong>{texts[lang].pp22}</strong>
              <p>{texts[lang].pp23}.</p>
              <p>{texts[lang].pp24}.</p>
            </li>
            <li><strong>{texts[lang].pp25}</strong>
              <div>{texts[lang].pp26}:</div>
              <ol>
                <li>{texts[lang].pp27};</li>
                <li>{texts[lang].pp28};</li>
                <li>{texts[lang].pp29};</li>
                <li>{texts[lang].pp30};</li>
                <li>{texts[lang].pp31}.</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <h4>{texts[lang].pp32}</h4>
          <p>{texts[lang].pp33}:</p>
          <ol>
            <li><strong>{texts[lang].pp34}.</strong>
              <p>{texts[lang].pp35}.</p>
            </li>
            <li><strong>{texts[lang].pp36}.</strong>
              <p>{texts[lang].pp37}.</p>
            </li>
            <li><strong>{texts[lang].pp38}.</strong>
              <p>{texts[lang].pp39}.</p>
            </li>
            <li><strong>{texts[lang].pp40}.</strong>
              <div>{texts[lang].pp41}.</div>
            </li>
          </ol>
          <p>{texts[lang].pp42}:</p>
          <ol>
            <li>{texts[lang].pp43};</li>
            <li>{texts[lang].pp44};</li>
            <li>{texts[lang].pp45};</li>
            <li>{texts[lang].pp46}.</li>
          </ol>
        </li>
        <li>
          <h4>{texts[lang].pp47}</h4>
          <div>{texts[lang].pp48}:</div>
          <ol>
            <li>{texts[lang].pp49}.</li>
          </ol>
        </li>
        <li>
          <h4>{texts[lang].pp50.toUpperCase()}</h4>
          <ol>
            <li><strong>{texts[lang].pp50}</strong>
              <p>{texts[lang].pp51}.</p>
              <p>{texts[lang].pp52}: <span className="highlight">Danlexs Spot {texts[lang].opf} {texts[lang].str}. Świeradowska 47, 02-662 {texts[lang].city}, {texts[lang].country}, NIP 5213974332,</span> <a href="mailto:danlexsspot@gmail.com">danlexsspot@gmail.com</a></p>
            </li>
            <li><strong>{texts[lang].pp53}</strong>
              <div>{texts[lang].pp54}.</div>
            </li>
          </ol>
        </li>
        <li>
          <h4>{texts[lang].pp55}</h4>
          <ol>
            <li><p>{texts[lang].pp56}.</p>
              <div>{texts[lang].pp57}:</div>
              <ol type="a">
                <li>{texts[lang].pp58};</li>
                <li>{texts[lang].pp59};</li>
                <li>{texts[lang].pp60};</li>
                <li>{texts[lang].pp61};</li>
                <li>{texts[lang].pp62}.</li>
              </ol>
              <p>{texts[lang].pp63}.</p>
              <div>{texts[lang].pp64}:</div>
              <ol type="a">
                <li>{texts[lang].pp65}.</li>
                <li>{texts[lang].pp66}.</li>
              </ol>
              <div>{texts[lang].pp67}.</div>
              <div>{texts[lang].pp68}.</div>
              <div>{texts[lang].pp69}.</div>
              <div>{texts[lang].pp70}.</div>
            </li>
          </ol>
        </li>
        <li>
          <h4>{texts[lang].pp71}</h4>
          <ol>
            <li><strong>{texts[lang].pp72}</strong>
              <p>{texts[lang].pp73}.</p>
            </li>
            <li><strong>{texts[lang].pp74}</strong>
              <p>{texts[lang].pp75}.</p>
              <div>{texts[lang].pp76}:</div>
              <p style={{ marginLeft: "16px" }}>{texts[lang].pp77}.</p>
              <p>{texts[lang].pp78}.</p>
            </li>
            <li><strong>{texts[lang].pp79}</strong>
              <p>{texts[lang].pp80}.</p>
            </li>
            <li><strong>{texts[lang].pp81}</strong>
              <p>{texts[lang].pp82}: <span className="highlight">Danlexs Spot {texts[lang].opf} {texts[lang].str}. Świeradowska 47, 02-662 {texts[lang].city}, {texts[lang].country}, NIP 5213974332,</span> <a href="mailto:danlexsspot@gmail.com">danlexsspot@gmail.com</a></p>
              <div>{texts[lang].pp83}: <span className="highlight">02-662 {texts[lang].city}, {texts[lang].str}. Świeradowska 47</span></div>
            </li>
          </ol>
        </li>
      </ol>
      <p style={{ marginTop: "32px" }}>{texts[lang].pp84}.</p>
    </div>
  )
}

export default Privacy;