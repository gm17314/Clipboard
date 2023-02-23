import { collection,getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseconfig";

const Container = styled.div`
  width: 50%;
  height: 33.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  &:disabled {
    background-color: #f7fff7f8;
    border: 1px solid grey;
  }
`;
const Code = styled.input`
  width: 13rem;
  height: 4rem;
  border-radius: 1rem;
  border: 1p solid grey;
  padding: 0.8rem;
  font-size: 2rem;
  color: #464040;
  outline: none;
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
const Copy = styled.div`
  border-radius: 1rem;
  padding: 0.7rem 0.9rem;
  font-size: 2rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: white;
  background-color: black;
  cursor: pointer;
  position: absolute;
  top: 23%;
  right: 18%;
`;
const Div = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
`;

const Right = () => {
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [copy, setCopy] = useState(false);

  const collectionRef = collection(db, "clipboard");

  const getData = async () => {
    const q = query(collectionRef, where("Id", "==", id.toString()));
    const Data = await getDocs(q);
    setData(Data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const Coopy=()=>{
    setCopy(true)
    navigator.clipboard.writeText(document.getElementById("data").value)
    setTimeout(() => {
      setCopy(false)
    }, 5000);
  }
  return (
    <Container>
      <Heading>Get Data👇</Heading>
      <Input id="data" disabled value={data.length!==0?data[0].data:""} ></Input>
      <Div>
        <Button onClick={getData}>Fetch</Button>
        <Code
          placeholder="Enter code"
          onChange={(e) => setId(e.target.value)}
        />
      </Div>
      <Copy onClick={Coopy}>{copy?"Done":"Copy"}</Copy>
    </Container>
  );
};

export default Right;
