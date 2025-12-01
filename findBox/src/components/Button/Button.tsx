import React from 'react';


interface Props extends React.PropsWithChildren {
    onClick: () => void;
    classList?: string[];
    type?: 'button' | 'submit'
}

const Button: React.FC<Props> = ({ onClick, classList=[], type='button' }) => {
    return (
      <button onClick={onClick} type={type} className={classList.join(' ')}>
        Reset
      </button>
    );
};

export default Button;