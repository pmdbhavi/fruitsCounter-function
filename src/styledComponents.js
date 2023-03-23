import styled from 'styled-components'

export const Maincontainer=styled.div`
    background-color: #ffd569;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Con=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const Heading=styled.h1`
font-family: 'Roboto';
  color: #000000;
  margin: 10px;
  text-align: center;
`

export const Span=styled.span`
color: #ffd569;
`

export const Img=styled.img`
width: 50%;
  margin: 10px;
`

export const Contain=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:576px){
    flex-direction: column;
  }
`
export const Con1=styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button=styled.button`
border-width: 0px;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  padding: 10px;
  cursor: pointer;
`