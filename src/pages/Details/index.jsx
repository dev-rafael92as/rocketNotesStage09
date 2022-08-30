import { Button } from '../../components/Button/index.jsx'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header/index.jsx'
import { Container, Links } from './styles.js'
import { Section } from '../../components/Section/index.jsx'
import { Tags } from '../../components/Tags/index.jsx'

export function Details() {
    return (
        <Container>
            <Header />

            <ButtonText title="Excluir Nota"/>

            <Section title="Links úteis">
                <Links>
                    <li><a href="#">https://www.rocketseat.com.br/</a></li>
                    <li><a href="#">https://www.rocketseat.com.br/</a></li>
                </Links>
            </Section>

            <Section title="Marcadores">
                <Tags title="express"></Tags>
                <Tags title="node.js"></Tags>
            </Section>

            <Button title="Voltar"/>
        </Container>
    )
}
