function OurCard({imageLink, name, position}) {
return(
  <div className='our-team-card'>
    <img src={imageLink} className='our-team-card__image' alt={name}/>
    <h3 className='our-team-card__name'>
      {name}
    </h3>
    <p className='our-team-card__position'>
      {position}
    </p>
  </div>
)
}

export default OurCard;