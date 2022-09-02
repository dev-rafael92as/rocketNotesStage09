import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

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
                <Input placeholder="Pesquisar pelo Título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React', 
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'node'}
                        ]
                    }} 
                    />
                </Section>

            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    )
}