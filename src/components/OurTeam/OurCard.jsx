function OurCard({imageLink, name, position}) {
return(
  <div className='our-card'>
    <img src={imageLink} className='our-card__image' alt={name}/>
    <h3 className='our-card__name'>
      {name}
    </h3>
    <p className='our-card__position'>
      {position}
    </p>
  </div>
)
}

export default OurCard;