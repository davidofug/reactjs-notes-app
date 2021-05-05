import styled, {createGlobalStyle} from 'styled-components'

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

export const CustomStyles = createGlobalStyle`
    .completed {
        background-color: ${color.success};
        color: ${color.white};
    }

    .vcenter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .centered-layer {
        width: 35%;
    }
`
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: grey;
        display: flex;
        height: 100vh;
    }
    *,
    *::after,
    *::before{
        box-sizing: inherit;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    #root {
        display: flex;
        align-items: center;
        height: 100vh;
        width: 100vh;
    }
` 

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