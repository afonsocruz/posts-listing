import React from 'react';

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  label: string | number;
  children?: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={props.className}
        type={props.type}
      >
        {props.label}
        {props.children}
      </button>
    </>
  );
};

export default Button;
