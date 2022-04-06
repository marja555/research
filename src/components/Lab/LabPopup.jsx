import React from "react";
import labPopupImgPath from '../../images/lab_popup_img.jpg';

function LabPopup(props) {

    return (
        <div className={props.isOpen 
            ? "popup popup_type_open"
            : "popup"}>
          <div className="popup__overlay" onClick={props.isClose}></div>
            <div className="popup__container">
                <div className="popup__wrapper">
                <h2 className="popup__title">Анализ социальных данных</h2>
                <button className="popup__close-btn" onClick={props.isClose}></button>
                <img src={labPopupImgPath} className="popup__image" alt="lab"></img>
                <p className="popup__text">В состав факультета входит ряд научных <br /> лабораторий и центров, 
                    в которых <br />проводятся исследования: 
                </p>
                <ul className="popup__list">
                    <li>безопасные киберфизические системы;</li>
                    <li>разработка средств защиты информации;</li>
                    <li>функциональная безопасность беспилотных транспортных средств;</li>
                    <li>теория информации и кодирования;</li>
                    <li>информационные процессы в Интернет и безопасность виртуального пространства;</li>
                    <li>интеллектуальные защищенные системы мультиагентного взаимодействия и пр.</li>
                </ul>
                </div> 
            </div>
        </div>
    )
}

export default LabPopup;