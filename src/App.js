import Card from "./components/stateless/Card";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Pile from "./components/stateless/Pile";

function App() {
  return (
    <div className="App">
      <div>
        <Card suit="hearts" pips={1}></Card>
        <Card suit="diamonds" pips={12}></Card>
        <Card suit="clubs" pips={4}></Card>
        <Card suit="spades" pips={7}></Card>
        <Pile />
      </div>
    </div>
  );
}

export default App;
