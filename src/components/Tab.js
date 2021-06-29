import React from "react";
import "../App.css";

const Tab = (props) => {
  const { selectedClass, setCurrentTabIndex, index, tab, currentTabIndex } =
    props;

  return (
    <>
      <div
        className={`tab-base ${selectedClass}`}
        onClick={(e) => setCurrentTabIndex(index)}
      >
        {tab.label}
      </div>
      {index == currentTabIndex && (
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          style={{ display: "block" }}
          value={tab.content}
          readOnly
        ></textarea>
      )}
    </>
  );
};

export default Tab;
