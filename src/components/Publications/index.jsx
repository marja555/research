import { useState } from "react";
import { Publication } from "./Publication";

export const Publications = () => {
  return (
    <>
      <h3 className="publications__title">Публикации</h3>
      <Publication
        title="Topic-driven Ensemble for Online Advertising Generation"
        image="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
        text="Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and"
        authors="Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov"
        fullLink="#"
      />
    </>
  );
};
