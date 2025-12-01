import React, { useState } from "react";
import BoxArea from "../components/BoxArea/BoxArea";
import { type BoxItem } from "../typing";
import Button from "../components/Button/Button";


const BoxPattern = {
  hasItem: false,
  clicked: false,
};

const BoxAreaPage = () => {

  const [tries, setTries] = useState(0);

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
  const [blockGame, setBlockGame] = useState(false);
  
  const clickBox = (boxObj: BoxItem, index: number) => {
    if (blockGame) return;
    if (!boxObj.clicked) setTries(tries + 1);
    if (boxObj.hasItem) setBlockGame(true)
    setBoxList(
      boxList.map((boxObj, i) => {
        if (index === i) return { ...boxObj, clicked: true };
        return boxObj;
      })
    );
  };

  const resetGame = () => {
    setBoxList(getBoxes());
    setTries(0);
    setBlockGame(false);
  }

  const finishGamePage = (
    <div className="absolute z-1 text-2xl inset-0 bg-gray-500/50 flex items-center justify-center">
      You find! Reset game to continue.
    </div>
  );

  return (
    <div className="h-screen flex items-center justify-center flex-col relative">
      { blockGame ? finishGamePage : null }
      <BoxArea boxList={boxList} clickBox={clickBox} />
      <p className="text-2xl m-2">Tries: {tries}</p>
      <Button
        onClick={resetGame}
        classList={[
          "py-1",
          "px-2",
          "border-1",
          "cursor-pointer",
          "m-2",
          "bg-blue-500",
          "text-white",
          "rounded-md",
          "z-2"
        ]}
      />
    </div>
  );
};

export default BoxAreaPage;
