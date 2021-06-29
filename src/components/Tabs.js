import React from "react";
import "../App.css";
import Tab from "./Tab";

const Tabs = (props) => {
  const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

  const selectedTab = (index) => {
    if (index === currentTabIndex) {
      return "selected";
    } else {
      return "";
    }
  };

  return (
    <ul>
      {allTabs.map((tab, index) => {
        return (
          <>
            <Tab
              selectedClass={`${selectedTab(index)}`}
              setCurrentTabIndex={setCurrentTabIndex}
              index={index}
              tab={tab}
              key={index}
              currentTabIndex={currentTabIndex}
            />
          </>
        );
      })}
    </ul>
  );
};

export default Tabs;
