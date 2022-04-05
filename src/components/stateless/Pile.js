import { useDrop } from "react-dnd";
import styled from "styled-components";

const StyledPile = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
`;

const Pile = () => {
  const [{ canDrop, isOver, card }, drop] = useDrop(() => ({
    accept: "CARD",
    drop: () => {
      console.log(card);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      card: monitor.getItem(),
    }),
  }));
  return <StyledPile ref={drop} />;
};

export default Pile;
