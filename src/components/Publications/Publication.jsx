import { useState } from "react";
import { SharePopup } from "./SharePopup";

export const Publication = ({ title, authors, image, text, fullLink }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const handleShareClick = () => setIsShareOpen(!isShareOpen);

  return (
    <article className="publication">
      <img src={image} alt={title} className="publication__image" />
      <h4 className="publication__title">{title}</h4>
      <p className="publication__authors">{authors}</p>
      <p className="publication__text">{text}</p>
      <SharePopup isOpen={isShareOpen} fullLink={fullLink} />
      <div className="publication__share-wrapper">
        <a className="publication__read-more" href={fullLink}>
          Читать далее
        </a>
        <button className="publication__share-button" onClick={handleShareClick} />
      </div>
    </article>
  );
};
