import styled, {css} from 'styled-components'

interface iStyledButtonProps{
    buttonSize: 'sm' | 'md' | 'lg',
    buttonStyle: 'solid' | 'outline' | 'dashed'
    children: React.ReactNode,
    className?: string,
}

export const StyledButton = styled.button<iStyledButtonProps>`
    display:inline-flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    border-radius: 6px;
    font-size:17px;    
    transition: .4s;
    font-family: 'Poppings',sans-serif;

    ${({buttonSize})=>{
        switch(buttonSize){
            case 'lg':
                return css`
                    padding:0 2rem;
                    height:80px;
                    border-radius: 12px;

                `
            case 'md':
                return css`
                    padding:0 2rem;
                    height:46px;
                    border-radius: 6px;
                `
            case 'sm':
                return css`
                    padding:0 1.5rem;
                    height:32px;
                    border-radius: 6px;
                `
        }
    }}

    ${({buttonStyle, theme})=>{
        switch(buttonStyle){
            case 'solid':
                return css`
                    background: ${theme.colors.blue};
                    color: ${theme.colors.white};
                `
            case 'outline':
                return css`
                    border: 1px solid ${theme.colors.blue};
                    background: transparent;
                    color: ${theme.colors.white};

                    &:hover{
                        background: ${theme.colors.blue};
                    }
                `
        }
    }}

    &&:hover{
        box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
    }
`