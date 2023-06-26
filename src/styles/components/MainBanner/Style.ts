import styled from 'styled-components'

export const StyledBanner = styled.section`
    margin-top: 20px;
    display:flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px;
    border-radius: 32px;
    background-color: gray;
    background: rgb(44,43,43);
    background: radial-gradient(circle, rgba(44,43,43,.3) 10%, rgba(211,55,55,.5) 100%);

    @media (max-width: 768px){
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
    }
    
`

export const FlexGrid = styled.div`
    max-width:350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    @media (max-width: 768px){
        align-items:center;
        text-align: center;
    }
`

export const TagsGrid = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: 768px){
        justify-content: center;
        gap:8px;
    }
`
export const PriceBox = styled.div`
    margin-top:32px;
    background-color: rgba(217,217,217,.15);
    display: inline-flex;
    align-items: center;
    width: fit-content;
    border-radius: 12px;

    p{
        padding: 10px 20px;
    }

    @media (max-width: 380px){
        flex-direction: column;
        margin-top:10px;
    }
`

export const ImageGrid = styled.div`
    
    img{
        max-width:100%;
        object-fit: cover;
    }
`