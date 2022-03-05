import React, {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import KeyboardPage from '../components/pages/KeyboardPage/KeyboardPage';

const Router: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<KeyboardPage/>}/>
      <Route path={'*'} element={<Navigate to={'/'}/>}/>
    </Routes>
  );
};

export default Router;