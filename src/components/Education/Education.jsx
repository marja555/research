import React from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import TabNavItem from "./TabBattonItem";
import TabContent from "./TabContent";

export const Education = ({ title, text}) => {
  const [activeTab, setActiveTab] = React.useState("tab1");
  return (
    <div>
      <h2 className="education__title">{title}</h2>
      <p className="education__text">{text}</p>
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <FirstTab imgFirstTab='https://csr.itmo.ru/images/fsuir_itmo.jpg'/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <SecondTab imgSecondTab="https://cdnn21.img.ria.ru/images/149418/44/1494184413_0:0:5472:3648_900x0_80_0_0_ff44ebba4851c6b743ad48dddac4dfda.jpg"/>
        </TabContent>
      </div>
      <div className="education__tabs">
          <TabNavItem
            title="АСПИРАНТУРА"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="МАГИСТРАТУРА"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        
      </div>
    </div>
  );
};
