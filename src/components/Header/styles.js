import styled from 'styled-components'

export const Container = styled.div`
  display: flex; align-items: center; 
  justify-content: space-around; 
  padding: 1rem; 
  background-color: #2ecc71; color: #fff;
`

export const Title = styled.span`
font-size: 3rem; 
margin-left: 1rem;
`

export const Button = styled.button`
background-color: #fff; 
color: #2ecc71; 
padding: 0.5rem 1rem; 
border: none; 
border-radius: 5px; 
cursor: pointer; 
&:
hover { background-color: #2ecc71; color: #fff; }
`