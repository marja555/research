export const SharePopup = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen ? "share-popup__container share-popup__container_opened" : "share-popup__container"
      }
    >
      <button type="button" className="share-popup__icon share-popup__icon_vk" />
      <button type="button" className="share-popup__icon share-popup__icon_fb" />
      <button type="button" className="share-popup__icon share-popup__icon_telegram" />
      <button type="button" className="share-popup__icon share-popup__icon_insta" />
      <button type="button" className="share-popup__icon share-popup__icon_youtube" />
    </div>
  );
};
