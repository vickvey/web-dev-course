import Property from "./Property";

export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((i) => (
        <Property property={i} />
      ))}
    </div>
  );
}
