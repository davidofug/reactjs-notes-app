import styled from 'styled-components'

export const color = {
    accent: '#5182f5',
    primary: '#415687',
    white: '#ffffff',
    danger: '#f22011',
    success: '#05b01c'
}
export const dimens = {
    lg: '20px',
    md: '15px',
    sm: '10px',
    xs: '5px'
}

export const Wrapper = styled.section`
    display: grid;
    width: 960px;
    grid-gap: 40px;
    grid-template-columns: 300px auto;

`
export const Logo = styled.span`
    background-color: #9b0bde;
    color: #fff;
    padding: ${dimens.md};
    font-weight: bold;
    text-transform: uppercase;
`
export const SmallContainer = styled.div`
    background-color: ${color.white};
    width: 400px;
`
export const Form = styled.form`
    margin: ${dimens.md}
`
export const Header = styled.div`
    background-color: ${color.primary};
    color: ${color.white};
    padding: ${dimens.md};
    font-size: 1.4rem;
    display: block;
    width: 100%;
`
export const TextInput = styled.input `
    display: block;
    width: 100%;
    margin: ${dimens.xs} auto;
    padding: 10px;
    border: 1px solid grey;
    &:hover {
        border-color: #000;
    }
    &:focus {
        outline: none;
        border-color: #000;
    }
    
`
export const Submit = styled.input`
    border: none;
    background-color: ${color.accent};
    width: 100%;
    padding: ${dimens.md};
    color: #fff;
`

export const Error = styled.p`
    color: ${color.danger}
`
export const Success = styled.p`
    color: ${color.success}
`