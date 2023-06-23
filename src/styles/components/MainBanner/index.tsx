import { StyledButton } from "../../buttons"
import { StyledBaseTitle, StyledParagraph, StyledTag } from "../../typography"
import Charizard from '../../../assets/Charizard.png'

const MainBanner = () => {
  return (
    <div>
        <div className="flexGrid">
            <StyledTag backgroundColor="red" >RPG</StyledTag>
            <StyledTag backgroundColor="blue" >AVENTURA</StyledTag>
            <StyledBaseTitle tag='h2' fontWeight={400} fontSize="lg">
                Pocket Monster Fantasy World
            </StyledBaseTitle>
        </div>
        <div className="priceBox">
            <StyledParagraph fontSize='lg' opacity={1}>
                <strong>
                    R$ 299,00
                </strong>
            </StyledParagraph>
            <StyledButton buttonSize='lg' buttonStyle='solid' >Comprar</StyledButton>
        </div>
        <div className="imageGrid">
            <img src={Charizard} alt="Imagem de Charizard" />
        </div>
    </div>
  )
}

export default MainBanner
