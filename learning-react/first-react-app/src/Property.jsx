import "./Property.css";

export default function Property({ property }) {
  return (
    <span className="Property">
      <h3>{property.name}</h3>
      <h4>${property.price} a night</h4>
      <h5>{property.rating}⭐</h5>
    </span>
  );
}
