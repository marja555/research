import React from "react";
import OurCard from "./OurCard";
import ourTeam1 from '../../images/ourTeam1.jpg';
import ourTeam2 from '../../images/ourTeam2.jpg';

function OurTeam() {
  return (
   <>
    <h2 className='our-team__title'>наша команда</h2>
    <div className='our-team__cards'>
      <OurCard
        imageLink={ourTeam2}
        surname ='Бухановский'
        name='Александр Александр Валерьевич'
        position='Директор, ДТН'
      />
      <OurCard
        imageLink={ourTeam1}
        surname
        name='Бобцов Алексей Алексеевич'
        position='Директор, ДТН Директор, ДТН Директор, ДТН Директор, ДТН'
      />
      <OurCard
        imageLink={ourTeam1}
        surname='Бобцов'
        name='Алексей Алексеевич'
        position='Директор, ДТН'
      />
      <OurCard
        imageLink={ourTeam1}
        surname='Бобцов'
        name='Алексей Алексеевич'
        position='Директор, ДТН Директор, ДТН Директор, ДТН Директор, ДТН'
      />
      <OurCard
        imageLink={ourTeam1}
        surname='Бобцов'
        name='Алексей Алексеевич'
        position='Директор, ДТН Директор, ДТН Директор, ДТН Директор, ДТН'
      />
    </div>
   </>
  )
}

export default OurTeam;