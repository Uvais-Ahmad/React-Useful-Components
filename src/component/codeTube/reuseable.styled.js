import styled, { css } from 'styled-components';

export const Button = styled.button`

    background-color :${(props)=> props.bg ? props.bg : '#fff'};
    color:${(props)=> props.color ? props.color : '#000'};
    ${(props)=> props.border==='none' && css`
        border: none;
    `}
    height : 30px;
    width : 100px;
    border-radius: 5px;
    margin: 10px;
    padding: 2px;
    box-shadow: 1px 1px 1px 1px grey
`

export const Container = styled.div`
    ${props => props.flex && css`
        display : flex
    `}
`