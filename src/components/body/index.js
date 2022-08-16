import React from "react";

export default function Body(props) {
  const { xoxContainer } = props;
  
  return (
    <div className="mainContainer">
      <div className="xox-container">
        {xoxContainer.map((row, i) => {
          return (
            <div className={"row row-" + (i + 1)} key={"row " + i}>
              {row.map((column, i) => {
                return (
                  <div
                    className={"column column-" + (i + 1)}
                    key={"column " + i}
                  >
                    x
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
