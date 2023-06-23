import styled, {DefaultTheme, css} from "styled-components";
import BaseTitle from "./components/typography";

interface iStyledBaseTitleProps{
    fontWeight: 400 | 700,
    fontSize: 'lg' | 'md' | 'sm',
    
}

export const StyledBaseTitle = styled(BaseTitle)<iStyledBaseTitleProps>`
    color: ${({theme}) => theme.colors.white};
    font-family: 'Popping', sans-serif;
    font-weight: ${({fontWeight})=> fontWeight};
    font-size: ${({fontSize})=> {
        switch(fontSize){
            case 'lg':
                return '44px'
            case 'md':
                return '20px'
            case 'sm':
                return '16px'
        }
    }};
`

// Outra sintaxe de lógica de variantes com switch case, melhor para quando ouver mais de uma propriedade para estilizar com base em uma única props
interface iStyledParagraph{
    opacity?: number;
    fontSize: 'lg'|'md'|'sm';
    children: React.ReactNode,
    theme: DefaultTheme;
}

export const StyledParagraph = styled.p<iStyledParagraph>`
    color: ${({theme}) => theme.colors.white};
    font-family: 'Poppings', sans-serif;
    font-weight: 400;
    opacity: ${({opacity}) => opacity ? opacity : .5};

    ${({fontSize}) => {
        switch(fontSize){
            case 'lg':
                return css`
                    font-size:20px;
                    // Aqui poderia vir diversos outros tipos de estilização.
                `
            case 'md':
                return css`
                    font-size:16px;
                `
            case 'sm':
                return css`
                    font-size:14px;
                `
        }
    }}

    strong, b{
        font-weight: 700;
    }


`

interface iStyledTagProps {
    backgroundColor: 'blue' | 'red';
}

export const StyledTag = styled.span<iStyledTagProps>`
    font-size: 20px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    display: inline-flex;
    height: 34px;
    align-items:center;
    justify-content: center;
    padding: 0 1.5rem;      
    border-radius: 6px;
    color: white;

    ${({backgroundColor, theme}) => {
        switch (backgroundColor) {
            case 'blue':
                return css`
                    background-color: ${theme.colors.blue};
                `
            case 'red':
                return css`
                    background-color: ${theme.colors.red};
                `
            }
        }
    }
`