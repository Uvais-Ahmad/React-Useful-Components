import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.$primary && css`
    background: #BF4F74;
    color: white;
  `}
`;

const OverrideButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

const Title = styled.h1`
  font-weight: bolder;
  color: #BF4F74;
`;

const Wrapper = styled.div`
  height : 200px;
  width: 400px;
  background-color: lightgrey;
`

export default function StyledComponent() {
  return (
    <>
      <Button $primary >Click Me (Primary)</Button>
      <Button >Click Me</Button>
      <Wrapper>
        <Title>Hello World</Title>
      </Wrapper>

      <OverrideButton>Overriden Tomato Button</OverrideButton>
    </>
  )
}
