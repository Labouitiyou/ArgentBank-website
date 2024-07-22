import PropTypes from 'prop-types'
import "../featureItem/FeatureItem.css"

const FeatureItem = ({ title, text, imageSrc }) => {
  return (
    <div className='feature-item'>
      <img src={imageSrc} alt="Icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
}

export default FeatureItem;