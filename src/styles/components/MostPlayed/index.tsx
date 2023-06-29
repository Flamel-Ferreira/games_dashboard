import { MdArrowForward } from "react-icons/md"
import { StyledBaseTitle } from "../../typography"

const MostPlayed = () => {
  return (
    <div className="Flex">
        <div className="header">
            <StyledBaseTitle fontSize="md" fontWeight={700} tag="h3">
                Os mais jogados
            </StyledBaseTitle> 
            <MdArrowForward/>
        </div>

        <div className="Flex">
            <div className="box-container">
                <img src="" alt="" />
                <StyledBaseTitle fontSize="sm" fontWeight={700} tag="h4">
                    Thie Lorem Game
                </StyledBaseTitle>
                <p>Lorem Company</p>
            </div>
            <div className="box-container">
                <img src="" alt="" />
                <StyledBaseTitle fontSize="sm" fontWeight={700} tag="h4">
                    Thie Lorem Game
                </StyledBaseTitle>
                <p>Lorem Company</p>
            </div>
            <div className="box-container">
                <img src="" alt="" />
                <StyledBaseTitle fontSize="sm" fontWeight={700} tag="h4">
                    Thie Lorem Game
                </StyledBaseTitle>
                <p>Lorem Company</p>
            </div>
        </div>
    </div>
  )
}

export default MostPlayed