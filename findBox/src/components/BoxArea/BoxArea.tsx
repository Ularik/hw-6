import LuckyBox from "./LuckyBox/LuckyBox";
import React, { useState } from "react";
import { type BoxItem } from "../../typing";


interface Props extends React.PropsWithChildren {
  boxList: BoxItem[];
  clickBox: (boxObj: BoxItem, index: number) => void;
}

const BoxArea: React.FC<Props> = ({ boxList, clickBox }) => {
  

  return (
    <div className="flex gap-1 flex-wrap w-md">
      {boxList.map((boxObj, index) => (
        <LuckyBox
          key={index}
          onClick={() => clickBox(boxObj, index)}
          hasItem={boxObj.hasItem}
          clicked={boxObj.clicked}
        />
      ))}
    </div>
  );
};

export default BoxArea;