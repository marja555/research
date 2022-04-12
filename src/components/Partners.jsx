import React from "react";
import rosnefti from "../images/rosnefti.svg";
import gazprom from "../images/gazprom.svg";
import mail from "../images/mail.svg";
import siemens from "../images/siemens.svg";
import sberbank from "../images/sberbank.svg";
import huawei from "../images/huawei.svg";

function Partners() {
  return (
    <div class="partners__content">
      <div class="partners__who-we-work">
        <h2 class="partners__title">с кем мы работаем</h2>
        <p class="partners__text">
          За время сотрудничества компания показала себя как надежный партнер,
          способный оперативно решать вопросы по внесению необходимых изменений.
        </p>
        <p class="partners__text">
          Отдельно хочется отметить квалифицированный персонал компании, который
          всегда готов прийти на помощь в решении поставленных задач, дать
          объективную оценку и свои рекомендации по улучшению деятельности.
          Надеемся на дальнейшее и плодотворное сотрудничество.
        </p>
      </div>
      <div>
        <img src={rosnefti} alt="Логотип Роснефть" class="partners__logo" />
        <img src={gazprom} alt="Логотип Газпром" class="partners__logo" />
        <img src={mail} alt="Логотип Маил" class="partners__logo" />
        <img src={siemens} alt="Логотип Сименс" class="partners__logo" />
        <img src={gazprom} alt="Логотип Газпром" class="partners__logo" />
        <img src={sberbank} alt="Логотип Сбербанк" class="partners__logo" />
        <img
          src={huawei}
          alt="Логотип Хуавей"
          class="partners__logo partners__logo_tablet"
        />
      </div>  
    </div>
  );
}

export default Partners;
