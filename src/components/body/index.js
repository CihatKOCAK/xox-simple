import { React, useState } from "react";
import {
  myClickableStyle,
  myUnclickableStyle,
  myClickableHoverStyle,
} from "./style";
export default function Body(props) {
  const { xoxContainer, setXoxContainer, turn, setTurn } = props;

  const onClickable = (clickedZone) => {
    return clickedZone === 0 ? true : false;
  };

  const [columnClickableStyle, setColumnClickableStyle] =
    useState(myClickableStyle);

  function pressXO(row, colm) {
    if (turn % 2 === 0) {
      let xs = xoxContainer;
      xs[row][colm] = 2;
      setXoxContainer(xs);
      setTurn(turn + 1);
    } else {
      let xs = xoxContainer;
      xs[row][colm] = 1;
      setXoxContainer(xs);
      setTurn(turn + 1);
    }
  }

  return (
    <div className="mainContainer">
      <div className="xox-container">
        {xoxContainer.map((row, index) => {
          return (
            <div className={"row row-" + (index + 1)} key={"r" + index}>
              {row.map((column, i) => {
                return (
                  <div
                    style={
                      onClickable(row[i])
                        ? columnClickableStyle
                        : myUnclickableStyle
                    }
                    // onMouseOver={() =>
                    //   setColumnClickableStyle(myClickableHoverStyle)
                    // }
                    // onMouseLeave={() =>
                    //   setColumnClickableStyle(myClickableStyle)
                    // }
                    className={"column column-" + (i + 1)}
                    key={"c " + i}
                    onClick={() => onClickable(row[i]) && pressXO(index, i)}
                  >
                    {column === 1 ? "X" : column === 2 ? "O" : ""}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
