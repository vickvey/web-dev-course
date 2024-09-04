import "./PropertyList.css";
import Property from "./Property";

export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </div>
  );
}

