import './index.css'

const TechnologyCard = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  return (
    <li className={`card ${className}`}>
      <h1 className="heading"> {title} </h1>
      <p className="paragraph"> {description} </p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}
export default TechnologyCard
