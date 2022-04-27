import React from "react";
import "./style.css";
function Buttons(props) {
  const addPage = function () {
    props.uzgar(props.search, props.page + 1);
  };
  const removePage = function () {
    props.uzgar(props.search, props.page - 1);
  };
  return (
    <div className="buttons">
      <button className="prev_btn" onClick={removePage}>
        Prev
      </button>
      <button className="next_btn" onClick={addPage}>
        Next
      </button>
    </div>
  );
}

export default Buttons;
