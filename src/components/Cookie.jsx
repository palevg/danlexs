import { useCookies } from 'react-cookie';
import { Button } from '@mui/material';
import { texts } from "../data";

const Cookie = ({ stateModal, lang }) => {
  const [cookies] = useCookies(['dsalertcookies']);

  const acceptCookies = () => {
    let newDate = new Date();
    newDate.setMonth(newDate.getMonth() + 3);
    document.cookie = "dsalertcookies=1; path=/; expires=" + newDate.toUTCString();
  }

  return cookies.dsalertcookies
    ? <></>
    : <div className="cookie">
      <div className="cookie__text">{texts[lang].cookie}.</div>
      <div className="cookie__buttons">
        <Button onClick={() => stateModal(true)} style={{ textTransform: 'none', width: '160px' }} variant="outlined">{texts[lang].cookmore}</Button>
        <Button onClick={acceptCookies} style={{ textTransform: 'none', width: '160px' }} variant="contained">{texts[lang].cookacc}</Button>
      </div>
    </div>
}

export default Cookie;