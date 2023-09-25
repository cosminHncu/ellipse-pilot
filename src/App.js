import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ShowCaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: left;
  color: #fff;
  margin: 0;
  align-self: flex-start;
`;

const Text = styled.p`
  align-self: flex-start;
  font-size: 1.5rem;
  text-align: left;
  color: #fff;
  margin: 0;
`;
const TextArea = styled.textarea`
  color: #0000ff;
  font-size: 2rem;
  margin: 0.5rem;
  background: #000;
  width: 100%;
  padding: 0.4rem;
  height: 20%;
  border: 3px solid #fff;
  border-radius: 3px;
  &:focus {
    outline: none;
    border-color: #0000ff;
  }
`;
const Button = styled.button`
  font-size: 1.5rem;
  width: 100%;
  padding: 0.25em 1em;
  border: 3px solid #fff;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  background: transparent;
  &:hover {
    color: #0000ff;
    border-color: #0000ff;
  }
  &:focus {
    color: #0000ff;
    border-color: #0000ff;
  }
`;
function App() {
  const [isMoving, setIsMoving] = useState(true);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const handleInputChange = (event) => {
    setError(false);
    setInputText(event.target.value);
  };
  const handleSubmit = () =>
    inputText === "" ? setError(true) : setIsMoving(false);

  const handleShowcase = () => {
    setIsMoving(true);
    setInputText("");
  };
  return (
    <>
      {isMoving ? (
        <Container>
          <TypeAnimation
            sequence={[
              "Elllllllllllllipse", // Types 'One'
              1000, // Waits 1s
              "Playground", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Proof of", // Types 'Three' without deleting 'Two'
              500,
              "Concept",
              500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: "4rem",
              color: "#fff",
            }}
          />
          <Text>this is a simulation</Text>
          <Text>more like</Text>
          <Text className="test">an idea</Text>
          <Text></Text>

          <TextArea onInput={handleInputChange} />
          <Button onClick={handleSubmit}>
            {error ? "text is needed" : "see your result"}
          </Button>
        </Container>
      ) : (
        <ShowCaseContainer onClick={handleShowcase}>
          <p className="moving-text">{inputText}</p>
        </ShowCaseContainer>
      )}
    </>
  );
}

export default App;
