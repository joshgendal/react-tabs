import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/Tabs";
import React, { useState } from "react";

function App() {
  const contentArr = [
    {
      label: "Tab1",
      content: "is really cool!",
    },
    {
      label: "Tab2",
      content: "is pretty stupid!",
    },
    {
      label: "Tab3",
      content: "are made of muck!",
    },
  ];
  const [allTabs, setAllTabs] = useState(contentArr);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="App">
      <Tabs
        allTabs={allTabs}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
      />
    </div>
  );
}

export default App;
