import styled from "styled-components";

export const StyledHeader = styled.header`
    margin-top: .5rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
    gap: 1rem;

    .userMenu{
        display: flex;
        align-items: center;
        gap: 1rem;

        img{
            width:60px;
            height:60px;
            object-fit:cover;
        }

        button{ 
            color: ${({theme})=> theme.colors.white};
           
            &:hover{
                color: ${({theme})=> theme.colors.blue}
            }
        }
    }

    @media (max-width: 600px){
         flex-direction: column-reverse;

         .userMenu{
            width:100%;
            justify-content:center;
         }
    }
`

export const StyledHeaderForm = styled.form`
    display: inline-flex;
    align-items: center;
    height:60px;
    max-width:370px;
    width: 100%;
    padding: 0 1rem;
    gap: .5rem;
    border-radius:10px;
    background-color: ${({theme}) => theme.colors.white20};

    button{ 
        color: ${({theme})=> theme.colors.white50};
        transition: .4s ease-in;

        &:hover{
            color: ${({theme})=> theme.colors.white}
        }
    }

    input{
        font-family: 'Poppins',sans-serif;
        font-size:16px;
        color: ${({theme}) => theme.colors.white};
        background: transparent;
        border:none;
        max-width: 370px;
        width: 100%;

        &::placeholder{
            font-weight:bold;
            color: ${({theme}) => theme.colors.white50};
        }
        &:focus{
            outline: none;
        }
    }

    @media (max-width: 600px){
        height:52px;
    }
`