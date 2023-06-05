import styled, {css} from "styled-components";
import BaseTitle from "./components/typography";

interface iStyledBaseTitleProps{
    fontWeight: 400 | 700,
    sizeCategory: 'lg' | 'md' | 'sm',
    
}

export const StyledBaseTitle = styled(BaseTitle)<iStyledBaseTitleProps>`
    font-family: 'Popping', sans-serif;
    font-weight: ${({fontWeight})=> fontWeight};
    font-size: ${({sizeCategory})=> {
        switch(sizeCategory){
            case 'lg':
                return '44px'
            case 'md':
                return '20px'
            case 'sm':
                return '16px'
        }
    }};
`

//outra sintaxe de lógica de variantes com switch case, melhor para quando ouver mais de uma propriedade para estilizar com base em uma única props
interface iStyledParagraph{
    opacity?: number;
    sizeCategory: 'lg'|'md'|'sm';
    children: React.ReactNode,
}

export const StyledParagraph = styled.p<iStyledParagraph>`
    font-family: 'Poppings', sans-serif;
    font-weight: 400;
    opacity: ${({opacity}) => opacity ? opacity : .5};

    ${({sizeCategory}) => {
        switch(sizeCategory){
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