import './App.css'
import HeaderComponent from './styles/components/Header/HeaderComponent'
import MainBanner from './styles/components/MainBanner'
import MostPlayed from './styles/components/MostPlayed'

function App() {
  return (
    <div className='App'>
        <HeaderComponent />
        <MainBanner />
        <MostPlayed />
    </div>
  )
}

export default App
