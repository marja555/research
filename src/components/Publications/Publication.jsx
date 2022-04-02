export const Publication = ({ title, authors, image, text, fullLink }) => {
  return (
    <article className="publication">
      <img src={image} alt={title} className="publication__image" />
      <h4 className="publication__title">{title}</h4>
      <p className="publication__authors">{authors}</p>
      <p className="publication__text">{text}</p>
      <div className="publication__share-wrapper">
        <a className="publication__read-more" href={fullLink}>
          Читать далее
        </a>
        <button className="publication__share-button"></button>
      </div>
    </article>
  );
};
