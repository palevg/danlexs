import { useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Box, MenuItem } from '@mui/material';
import { texts } from "../data";

const Header = (props) => {
  const [lang, setLang] = useState(props.lang);

  const languages = [
    { code: 'PL', id: 0, text: 'Polski' },
    { code: 'DE', id: 1, text: 'Deutsch' },
    { code: 'GB', id: 2, text: 'English' }
  ];

  const handleChangeLang = (value) => {
    setLang(value);
    window.localStorage.setItem('dslang', value);
    props.updateLang(value);
  }

  const handleMenuClick = () => {
    const cb = document.getElementById("side-menu");
    if (cb.checked) cb.checked = false;
  }

  return (
    <header className="header bg-gradient">
      <div>
        <div className="header__height"></div>
        <input className="header__side-menu" type="checkbox" id="side-menu" />
        <label className="header__hamb" htmlFor="side-menu"><span className="header__hamb-line"></span></label>
        <nav className="header__nav">
          <ul className="header__menu" onClick={handleMenuClick}>
            <li><Link to="/">{texts[lang].miHome}</Link></li>
            <li><Link to="/privacy">{texts[lang].polpr}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header__lang">
        <TextField
          select
          defaultValue="PL"
          variant="standard"
          value={lang}
          onChange={(event) => { handleChangeLang(event.target.value) }}
          InputProps={{ disableUnderline: true, sx: { color: "white", backgroundColor: "transparent" } }}
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
  )
}
export default Header;