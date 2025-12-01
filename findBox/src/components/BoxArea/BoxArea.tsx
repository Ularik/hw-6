import LuckyBox from "./LuckyBox/LuckyBox";
import React, { useState } from "react";


interface Props extends React.PropsWithChildren {
  boxes: BoxItem[];
}

const BoxPattern = {
  hasItem: false,
  clicked: false,
};

export interface BoxItem {
  hasItem: boolean;
  clicked: boolean;
}


const BoxArea: React.FC<Props> = ({ boxes }) => {


  return (
    <div className="flex gap-1 flex-wrap w-md">
      {boxes.map((boxObj, index) => (
        <LuckyBox
          onClick={() => ClickBox(index)}
          hasItem={boxObj.hasItem}
          clicked={boxObj.clicked}
        />
      ))}
    </div>
  );
};

export default BoxArea;