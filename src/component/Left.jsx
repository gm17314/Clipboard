import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

const Container = styled.div`
  width: 50%;
  height: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 620px) {
    width: 90%;
    height: 36rem;
  }
`;
const Heading = styled.h1`
  font-size: 4rem;
  color: #064f5c;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1rem;
`;
const Input = styled.textarea`
  width: 70%;
  height: 22rem;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 2rem;
  color: #555151;
  background-color: #f7fff7f8;
`;

const Div = styled.div`
  width: 27%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const Button = styled.button`
  border-radius: 1rem;
  padding: 0.5rem 0.6rem;
  font-size: 2.5rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: white;
  background-color: #025891;
  border: 1px solid #022444;
  cursor: pointer;
`;
const Code = styled.span`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight:500;
  font-size: 3rem;
  color: black;
  @media (max-width: 620px) {
    font-size: 3.7rem;
  }
`;

const Left = () => {
  const [fetchId, setFetchId] = useState("");
  const [data, setData] = useState("");
  const collectionRef = collection(db, "clipboard");
  
  const sendData = async () => {
    const id = Math.floor(1000 + Math.random() * 9000);
    await addDoc(collectionRef, { Id: id.toString(), data: data });
    setFetchId(id);
  };
  return (
    <Container>
      <Heading>Paste Data👇</Heading>
      <Input
        placeholder="Type Here..."
        onChange={(e) => setData(e.target.value)}
      ></Input>
      <Div>
        <Button onClick={sendData}>Send</Button>
        <Code>{fetchId}</Code>
      </Div>
    </Container>
  );
};

export default Left;
