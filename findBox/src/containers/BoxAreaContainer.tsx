import React, { useState } from "react";
import BoxArea from "../components/BoxArea/BoxArea";

const BoxPattern = {
  hasItem: false,
  clicked: false,
};

export interface BoxItem {
  hasItem: boolean;
  clicked: boolean;
}

const BoxAreaPage = () => {
  const getBoxes = () => {
    const boxes: BoxItem[] = [];
    const hasItemIndex = Math.floor(Math.random() * 36);
    for (let i = 0; i < 36; i++) {
      const newBox = { ...BoxPattern };
      if (i === hasItemIndex) newBox.hasItem = true;
      boxes.push(newBox);
    }
    return boxes;
  };

  const [boxList, setBoxList] = useState<BoxItem[]>(getBoxes());

  return (
    <div className="flex gap-1 flex-wrap w-md">
      <BoxArea boxes={boxList} />
    </div>
  );
};

export default BoxAreaPage;
