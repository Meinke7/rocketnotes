import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Meinke7.png" 
        alt="foto do usuário" />

        <div>
          <span>Bem-Vindo,</span>
          <strong>Carlos Meinke</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
      
    </Container>
  )
}