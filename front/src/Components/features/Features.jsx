import "../features/Features.css"
import FeaturesList from '../../datas/Features.json'
import FeatureItem from "../featureItem/FeatureItem";

const Features = () => {
    return (
     <div className="features">
        {FeaturesList.map((feature) => (
        <FeatureItem
          key={feature.id}
          title={feature.title}
          text={feature.text}
          image={feature.image}
        />
      ))}
     </div>
   )
}
export default Features;