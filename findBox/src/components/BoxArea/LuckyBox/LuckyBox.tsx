import React from 'react';

interface Props extends React.PropsWithChildren {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const LuckyBox: React.FC<Props> = ({ hasItem, clicked, onClick }) => {
  const boxClasses = ["absolute", "inset-0", "bg-gray-500"];

  if (clicked) boxClasses.push("hidden");

  return (
    <div onClick={onClick} className="inline-block size-16 relative">
      <div className={boxClasses.join(" ")}></div>
      {hasItem ? "O" : null}
    </div>
  );
};

export default LuckyBox;