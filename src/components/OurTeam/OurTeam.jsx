import React from "react";
import OurCard from "./OurCard";
import ourTeam1 from '../../images/ourTeam1.png';
import ourTeam2 from '../../images/ourTeam2.png';

function OurTeam() {
  return (
   <>
    <h2 className='ourTeam__title'>НАША КОМАНДА</h2>
    <div className='ourTeam__cards'>
      <OurCard
        src={ourTeam2}
        name='Бухановский
          Александр
          Валерьевич'
        position='Директор, ДТН'
      />
      <OurCard
        src={ourTeam1}
        name='Бобцов
          Алексей
          Алексеевич'
        position='Директор, ДТН'
      />
    </div>
   </>
  )
}

export default OurTeam;