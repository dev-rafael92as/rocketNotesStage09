import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';

export function Header() {
	return (
		<Container> 
            <Profile to="/profile">
                <img src= "https://github.com/dev-rafael92as.png"
                            alt= "Foto usuário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Rafael Barros</strong>
                </div>
            </ Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
		</ Container>
	);
};