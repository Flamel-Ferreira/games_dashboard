import { StyledButton } from "../../buttons"
import { StyledBaseTitle, StyledParagraph, StyledTag } from "../../typography"
import Charizard from '../../../assets/Charizard.png'
import { StyledBanner, FlexGrid,TagsGrid,PriceBox, ImageGrid } from "./Style"

const MainBanner = () => {
  return (
    <StyledBanner>
        <FlexGrid>
            <TagsGrid>
                <StyledTag backgroundColor="red" >RPG</StyledTag>
                <StyledTag backgroundColor="blue" >AVENTURA</StyledTag>
            </TagsGrid>
            <StyledBaseTitle tag='h2' fontWeight={400} fontSize="lg">
                Pocket Monster Fantasy World
            </StyledBaseTitle>
            <PriceBox>
                <StyledParagraph fontSize='lg' opacity={1}>
                    <strong>
                        R$ 299,00
                    </strong>
                </StyledParagraph>
                <StyledButton buttonSize='lg' buttonStyle='solid' >Comprar</StyledButton>
            </PriceBox>
        </FlexGrid>
        <ImageGrid>
            <img src={Charizard} alt="Imagem de Charizard" />
        </ImageGrid>
    </StyledBanner>
  )
}

export default MainBanner
