import styled from "styled-components";
import { useDrag } from "react-dnd";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  width: 100px;
  background-color: rgb(253, 248, 234);
  border-radius: 5px;
  border: solid 1px #707070;
  opacity: ${(props) => (props.isDragging ? 0 : 1)};
  box-shadow: 2.5px 2.5px 10px -5px #2d2d2d;
`;

const StyledSuit = styled.div`
  width: ${(props) => (props.sm ? "12px" : "25px")};
  height: ${(props) => (props.sm ? "12px" : "25px")};
  padding: 5px;
  background: url(${(props) => props.url}) no-repeat;
  background-size: 100%;
  background-origin: content-box;
`;

const getSuitUrl = (suit) => {
  switch (suit) {
    case "hearts":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/SuitHearts.svg/32px-SuitHearts.svg.png";
    case "diamonds":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/SuitDiamonds.svg/32px-SuitDiamonds.svg.png";
    case "clubs":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/32px-SuitClubs.svg.png";
    case "spades":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/SuitSpades.svg/32px-SuitSpades.svg.png";
  }
};

const StyledCardCorner = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
`;

const StyledPipRow = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-between;
  transform: ${(props) => (props.inverted ? "rotate(180deg)" : "rotate(0)")};
`;

const PipRow = ({ pips, suit, inverted }) => (
  <StyledPipRow inverted={inverted}>
    <StyledCardCorner>
      {pips}
      <StyledSuit url={getSuitUrl(suit)} sm />
    </StyledCardCorner>
    <StyledCardCorner>
      {pips}
      <StyledSuit url={getSuitUrl(suit)} sm />
    </StyledCardCorner>
  </StyledPipRow>
);

const Card = ({ pips, suit }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CARD",
    item: { pips, suit },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <StyledCard ref={dragRef} isDragging={isDragging}>
      <PipRow pips={pips} suit={suit} />

      <PipRow pips={pips} suit={suit} inverted />
    </StyledCard>
  );
};

export default Card;
