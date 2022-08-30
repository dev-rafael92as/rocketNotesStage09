import { Container, Profile } from './styles';

export function Header() {
	return (
		<Container> 
            <Profile>
                <img src= "https://github.com/dev-rafael92as.png"
                            alt= "Foto usuário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Rafael Barros</strong>
                </div>
            </ Profile>
		</ Container>
	);
};