import icon from '../../images/Vector.png'

export const Article = ({ date, title, text }) => {
   return (
      <div className="article__container">
         <img src={icon} alt=""  className="article__icon"/> 
         <div className="article__content">
            <p className="article__date">{date}</p>
            <h2 className="article__title">{title}</h2>
            <p className="article__text">{text}</p>
         </div>
      </div>
   );
};
