import React from 'react'
import { Button, Container } from './reuseable.styled'

export default function CodeTube() {
  return (
    <>
    {/* Example of Styled Component with props */}
        <Container flex={1}>
            <div>
                Hello,
                <Button border={'none'}>Click Me</Button>
            </div>
            <div>
                Guyes
                <Button bg={'lightblue'}>Hey</Button>
            </div>
        </Container>
    </>
  )
}
