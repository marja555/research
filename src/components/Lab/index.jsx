import React from "react";
import Card from "./CardBlockLab";
import { cardsLabMock } from "../../utils/cardsLabMock";

 function Lab({cards}) {
    
    return (
        <section className="lab">
            <div className="lab__grid">
                <h2 className="lab__title">INDUSTRIAL AI RESEARCH LAB</h2>
                <div className="lab__image"></div>
                <p className="lab__text">
                  Центр национальной технологической инициативы (НТИ), получивший государственную поддержку 
                  по направлению «Технологии машинного обучения и когнитивные технологии». 
                </p>
                <p className="lab__text">
                  Мы изучаем проблемы и выявляем, когда мы работаем вместе с нашими клиентами, новые решения 
                  находят, не задумываясь. Работая таким образом и проявляя гибкость, мы можем поддерживать 
                  новый подход для удовлетворения потребностей наших клиентов.
                </p>
            </div>
            <section className="cards-block-lab">
              {cardsLabMock.map((cardData) => (
                <Card
                card={cardData}
                key={cardData.id}
                 />
    ))
            }
            </section>
        </section>
    )
}
export default Lab;