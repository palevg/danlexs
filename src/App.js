import { useState } from "react";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const getAppLang = () => {
    let dslang = window.localStorage.getItem('dslang');
    dslang === null ? dslang = 0 : dslang = +dslang;
    return dslang;
  }
  const [lang, setLang] = useState(getAppLang());

  return (
    <>
      <a href="anchor" name="home"></a>
      <Header lang={lang} setLang={setLang} />
      <ToastContainer position="top-center" />
      <Home lang={lang} />
      <Footer />
    </>
  );
}

export default App;