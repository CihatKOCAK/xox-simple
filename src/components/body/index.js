import { React } from "react";
import "./style.css"
import { myClickableStyle, myUnclickableStyle } from "./style";
export default function Body(props) {
  const { xoxContainer, setXoxContainer, turn, setTurn } = props;

  const onClickable = (clickedZone) => {
    return clickedZone === 0 ? true : false;
  };

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
                        ? myClickableStyle
                        : myUnclickableStyle
                    }
                    onMouseOver={(e) => {
                      if (onClickable(row[i]))
                        e.target.style.background = "#DEEDCF";
                    }}
                    onMouseLeave={(e) => {
                      if (onClickable(row[i]))
                        e.target.style.background = "#99D492";
                    }}
                    className={"column column-" + (i + 1)}
                    key={"c " + i}
                    onClick={() => onClickable(row[i]) && pressXO(index, i)}
                  >
                    {column === 1 ? (
                      <p className="x">X</p>
                    ) : column === 2 ? (
                      <p className="o">O</p>
                    ) : (
                      ""
                    )}
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
