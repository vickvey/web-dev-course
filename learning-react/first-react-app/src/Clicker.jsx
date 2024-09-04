// function handleClick() {
//   console.log("CLICKED THE BUTTON!!!");
// }

// function handleHover() {
//     console.log("HOVERED!!")
// }

export default function Clicker({ message, buttonText }) {
  const handleClick = () => {
    alert(message);
  }
    return (
    <>
      {/* <p onMouseOver={handleHover}>Hover Over Me</p> */}
      <button onClick={handleClick}>{buttonText}</button>
    </>
  );
}
