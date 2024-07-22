import "../features/Features.css"
import FeaturesList from '../../datas/Features.json'
import FeatureItem from "../featureItem/FeatureItem";

const Features = () => {
    return (
     <div class="features">
        {FeaturesList.map((feature) => (
        <FeatureItem
          key={feature.id}
          title={feature.title}
          text={feature.text}
          imageSrc={feature.imageSrc}
        />
      ))}
     </div>
   )
}
export default Features;