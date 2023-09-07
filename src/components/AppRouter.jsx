import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Privacy from  '../components/Privacy';

const AppRouter = (props) => {

  return (
    <Routes>
      <Route index element={<Home lang={props.lang} />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path="*" element={<Home lang={props.lang} />} />
    </Routes>
  )
}

export default AppRouter;