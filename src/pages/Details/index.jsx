import { Button } from '../../components/Button/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Container } from './styles.js'

export function Details() {
    return (
        <Container>
            <Header></Header>
            <h1>Oláa</h1>

            <Button title="Voltar"/>
        </Container>
    )
}
