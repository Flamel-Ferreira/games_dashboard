import {MdSearch, MdNotifications } from 'react-icons/md'
import Avatar1 from '../../../assets/Avatar 1.png'
import { StyledHeader, StyledHeaderForm } from './StyledHeaderComponent'

const HeaderComponent = () => {
  return (
    <StyledHeader>
        <StyledHeaderForm>
            <button type='submit'>
                <MdSearch size={30} color='rgba(255,255,255,.5)'/>
            </button>
            <input type="text" name='search' id='search' placeholder='Buscar...'/>
        </StyledHeaderForm>
        <div className="userMenu">
            <button>
                <MdNotifications size={30} color='#FFF' />
            </button>
            <img src={Avatar1} alt="Nome do Usuário" />
        </div>
    </StyledHeader>
  )
}

export default HeaderComponent