import "./Toggler.css";
import { useState } from "react";

export default function Toggler() {
  const [isSuprised, setIsSurprised] = useState(true);

  const toggleIsSurprised = () => setIsSurprised(!isSuprised);
  return (
    <>
      <p className="Toggler" onClick={toggleIsSurprised}>
        {isSuprised ? "Surprised" : "NotSurprised"}
      </p>
    </>
  );
}
