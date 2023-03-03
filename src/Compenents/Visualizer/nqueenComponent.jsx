import { useEffect, useState } from "react";
import { Nqueen } from "../Algorithm/nqueen";
import { changeDelay } from "../Utils/utils";
import "./nqueenComponent.css";

export default function NQueen() {
  var [gridSize, setGridSize] = useState(4);
  var [grid, setGrid] = useState([]);

  function renderGrid(val) {
    var arr = [];
    for (var i = 0; i < val; i++) {
      var tr = [];
      for (var j = 0; j < val; j++) {
        if (i % 2 === j % 2) {
          tr.push("white element-block");
        } else {
          tr.push("black element-block");
        }
      }
      arr.push(tr);
    }
    setGrid(arr);
    var ele = document.querySelectorAll(".element-block");
    for (i = 0; i < ele.length; i++) {
      ele[i].innerHTML = "";
    }
  }
  useEffect(() => {
    renderGrid(4);
  }, []);

  function setGridd(e) {
    setGridSize(e.target.value);
    renderGrid(e.target.value);
  }

  return (
    <div>
      <div className="heading">
        <h1>N-QUEEN VISUALIZER</h1>
      </div>
      <div style={{ marginTop: "30px" }}>
        <div>
          <label className="label">
            Grid Size: {gridSize} X {gridSize}
            <input
              id="rangeSlider"
              type="range"
              min="4"
              max="8"
              value={gridSize}
              onChange={(e) => setGridd(e)}
            />
          </label>

          <label className="label">
            Delay:
            <input
              className="slider"
              type="range"
              min="10"
              max="500"
              onChange={(e) => {
                changeDelay(e.target.value);
              }}
            />
          </label>
          <div>
            <button className="btn" id="nqueen" onClick={Nqueen}>
              <span className="btnspan">N-QUEEN</span>
            </button>
          </div>
        </div>
        <br />
        <div className="box">
          <table className="board">
            <tbody>
              {grid === null
                ? null
                : grid.map((row, ridx) => (
                    <tr key={ridx}>
                      {row.map((c, cid) => (
                        <td
                          key={cid}
                          style={{
                            width: 400 / gridSize,
                            height: 350 / gridSize,
                            fontSize: 250 / gridSize,
                          }}
                          className={c}
                        ></td>
                      ))}
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
