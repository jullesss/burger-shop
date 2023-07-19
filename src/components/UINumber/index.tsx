import React from 'react';
import numeral from 'numeral';

const UINumber = ({ format, children }: any) => (
  <span>{numeral(children).format(format)}</span>
);

export default UINumber;
