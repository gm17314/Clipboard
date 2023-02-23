import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'


const Heading = styled.h1`
    font-size: 6rem;
    text-align: center;
    color:#046d9ff7;
    text-shadow:0 .2rem .1rem #01407a9c;
    font-family: 'Roboto Slab';
    margin: 4rem;
    font-variant: small-caps;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    @media (max-width:620px) {
      height: 80rem;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
`


const Home = () => {
  return (
    <>
    <Heading>My ClipBoard</Heading>
    <Container>
        <Left/>
        <Right/>
    </Container>
    </>
    
  )
}

export default Home
