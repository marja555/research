import React from 'react';

function Header() {
   return (
      <>
         <h1 className="header__title">
            Когнитивные технологии,{' '}
            <span className="header__title-span">машинное обучение</span>
         </h1>
         <p className="header__subtitle">
            Системы прикладного искусственного интеллекта
         </p>
         <div className="header__button">
            <a href="#" className="header_link">
               НАШИ ПРОЕКТЫ
            </a>
         </div>
      </>
   );
}
export default Header;
