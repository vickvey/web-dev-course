import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";

function App() {
  return (
    // <div>
    //   <Heading color="magenta" text="Welcome!" fontSize="20px" />
    //   <Heading color="teal" text="blah!" fontSize="48px" />

    //   <DoubleDice />
    //   <DoubleDice />
    //   <DoubleDice />

    //   <ColorList colors={["red", "pink", "purple", "teal"]} />
    //   <ColorList colors={["olive", "orangered", "slategrey", "teal"]} />
    // </div>
    <div>
      <Slots val1="🍒" val2="🍒" val3="🍒" />
    </div>
  );
}

export default App;
