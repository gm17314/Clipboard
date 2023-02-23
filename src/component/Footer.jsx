import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2.3rem;
    background-color: black;
    position: fixed;
    bottom: 0;

`
const Footer = () => {
  return (
    <Container>Created By Gaurav Maurya💻</Container>
  )
}

export default Footer
