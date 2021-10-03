import { Button } from '@material-ui/core';
import { MouseEventHandler } from 'react';

interface Button {
  onClick: MouseEventHandler | any;
  children: React.ReactNode;
}

const Buttons = ({ onClick, children }: Button) => (
  <button onClick={(e) => onClick(e)}>{children}</button>
);

export default Buttons;
