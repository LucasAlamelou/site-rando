import React, { useState } from 'react';
import '../Style/Tabs.css';

const Tabs = ({ tabs, children }) => {
  const [activeTabId, setActiveTabId] = useState(1);

  const activeTabContent = children.filter((child) => {
    return parseInt(child.props.id) === activeTabId;
  });

  const handleTabClick = (tab) => {
    setActiveTabId(tab.id);
  };

  const tabsTemplate = tabs.map((tab) => {
    return (
      <li
        id={tab.id}
        className={tab.id === activeTabId ? 'active' : null}
        onClick={() => handleTabClick(tab)}
      >
        {tab.label}
      </li>
    );
  });

  return (
    <>
      <div className="tabs-wrapper">
        <ul className="tabs">{tabsTemplate}</ul>
        <div className="tab-content">{activeTabContent}</div>
      </div>
    </>
  );
};

export default Tabs;
