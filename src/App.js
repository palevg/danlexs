import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const getAppLang = () => {
    let dslang = window.localStorage.getItem('dslang');
    if (dslang === null) dslang = 0
    else dslang = +dslang;
    return dslang;
  }
  const [lang, setLang] = useState(getAppLang());
  const updateLang = (value) => { setLang(value); }

  return (
    <BrowserRouter>
      <a href="anchor" name="home"></a>
      <Header lang={lang} updateLang={updateLang} />
      <ToastContainer position="top-center" />
      <AppRouter lang={lang} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;