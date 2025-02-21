import React, { JSX } from 'react';
import TitleBar from '../components/title-bar';

const Main = (): JSX.Element => {
  return (
    <>
      <TitleBar />
      <div className='main-container'>
        <h1>Sample Text</h1>
      </div>
    </>
  );
};

export default Main;