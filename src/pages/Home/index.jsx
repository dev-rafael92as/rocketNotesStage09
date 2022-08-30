import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive></ButtonText>
                </li>
                <li>
                    <ButtonText title="Frontend"></ButtonText>
                </li>
                <li>
                    <ButtonText title="Node"></ButtonText>
                </li>
                <li>
                    <ButtonText title="React"></ButtonText>
                </li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>
        </Container>
    )
}