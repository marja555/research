function OurCard({src, name, position}) {
return(
  <div className='ourCrad'>
    <img src={src} className='ourCrad__image' alt={name}/>
    <h3 className='ourCard__name'>
      {name}
    </h3>
    <p className='ourCard__position'>
      {position}
    </p>
  </div>
)
}

export default OurCard;