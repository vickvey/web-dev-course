export default function ColorList({ colors }) {
  // const elements = [
  //     <p>Hello!</p>,
  //     <h1>Bye!</h1>,
  //     <input type="password" />
  // ]

  //   const lis = colors.map((color) => <li>{color}</li>);
  return (
    <div>
      <p>ColorList</p>
      <ul>
        {colors.map((c) => (
          <li style={{color: c}}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
