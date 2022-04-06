import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <button onClick={handleClick}  className={activeTab === id ? "education__button" : 'education__button-active'}>
      {title}
    </button>
  );
};
export default TabNavItem;
