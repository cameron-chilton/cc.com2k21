import React from 'react';
import {string} from 'prop-types';

const TextScroller = ({fontName, scrollText}) => {
  return (
    <span className={fontName}>{scrollText}</span>
  );
};


export default TextScroller;
