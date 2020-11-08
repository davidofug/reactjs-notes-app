import styled from 'styled-components'


export const Wrapper = styled.section`
    display: grid;
    width: 960px;
    grid-gap: 40px;
    grid-template-columns: 300px auto;

`
export const Logo = styled.span`
    background-color: #9b0bde;
    color: #fff;
    padding: 15px;
    font-weight: bold;

    text-transform: uppercase;
`
export const Half = styled.div`
    
`
export const TextInput = styled.input `
    display: block;
    width: 100%;
    margin: 5px auto;
    padding: 10px;
    border: 2px solid grey;
    border-radius: 5px;
    &:hover {
        border-color: #000;
    }
    &:focus {
        outline: none;
        border-color: #000;
    }
    
`
export const Submit = styled.input`
    border: 1px solid #445599;
    background-color: pink;
`