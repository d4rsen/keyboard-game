import React, {FC, useEffect} from 'react';
import './KeyboardPage.scss'
import targetRandomKey from './script';
import Keyboard from '../../common/Keyboard/Keyboard';

const KeyboardPage: FC = () => {

  useEffect(() => {
    targetRandomKey()
  }, [])

  return (
    <div className="keyboardPage container">
      <h1 className="title">Eyes on the screen</h1>
      <Keyboard/>
      <h1 className="title">Hands on the keyboard</h1>
    </div>
  );
};

export default KeyboardPage;