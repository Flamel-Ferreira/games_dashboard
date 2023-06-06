import './App.css'
import { StyledButton } from './styles/buttons'
import { StyledBaseTitle, StyledParagraph } from './styles/typography'

function App() {
  return (
    <div className='App'>
        <StyledBaseTitle 
            tag='h1' 
            fontWeight={400} 
            sizeCategory='lg' 
            className='titulo'
        >
            Games Dashboard
        </StyledBaseTitle>

        <StyledParagraph 
            sizeCategory='lg' 
        >
            Parágrafo
        </StyledParagraph>

        <StyledButton 
            buttonSize='sm'
            buttonStyle='outline'
            className='infoButton'
        >
            Ver Mais
        </StyledButton>
    </div>
  )
}

export default App
