import './App.css'
import { StyledBaseTitle, StyledParagraph } from './styles/typography'

function App() {
  return (
    <div className='App'>
        <StyledBaseTitle 
            tag='h1' 
            fontWeight={400} 
            sizeCategory='lg' 
            className='titulo'
        >Games Dashboard</StyledBaseTitle>

        <StyledParagraph sizeCategory='lg' >Parágrafo</StyledParagraph>
    </div>
  )
}

export default App
