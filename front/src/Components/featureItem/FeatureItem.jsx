import PropTypes from 'prop-types'
import "../featureItem/FeatureItem.css"

const FeatureItem = ({ title, text, image }) => {
  return (
    <div className='feature-item'>
      <img src={image} alt="Icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

FeatureItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

export default FeatureItem;