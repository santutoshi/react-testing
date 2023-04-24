import React from 'react';

const Button = ({
  label,
  style,
  onClick,
}: {
  label: any;
  style: any;
  onClick: any;
}): JSX.Element => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
