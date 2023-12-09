import { useCookies } from 'react-cookie';
import { Button } from '@mui/material';
import { texts } from "../data";

const Cookie = ({ lang, setOpenModal, setContent }) => {
  const [cookies] = useCookies(['dsalertcookies']);

  const acceptCookies = () => {
    let newDate = new Date();
    newDate.setMonth(newDate.getMonth() + 3);
    document.cookie = "dsalertcookies=1; path=/; expires=" + newDate.toUTCString();
  }

  const handleOpenPrivacy = () => {
    setContent(1);
    setOpenModal(true);
  }

  return cookies.dsalertcookies
    ? <></>
    : <div className="cookie">
      <div className="cookie__text">{texts[lang].cookie}.</div>
      <div className="cookie__buttons">
        <Button
          onClick={handleOpenPrivacy}
          style={{ textTransform: 'none', width: '160px' }}
          variant="outlined"
        >
          {texts[lang].cookmore}
        </Button>
        <Button
          onClick={acceptCookies}
          style={{ textTransform: 'none', width: '160px' }}
          variant="contained"
        >
          {texts[lang].cookacc}
        </Button>
      </div>
    </div>
}

export default Cookie;