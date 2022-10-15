import { Button } from '../../components/Button/index.jsx'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header/index.jsx'
import { Container, Links, Content } from './styles.js'
import { Section } from '../../components/Section/index.jsx'
import { Tags } from '../../components/Tags/index.jsx'
import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
import { useNavigate, useParams } from 'react-router-dom'

export function Details() {
    const [ data, setData ] = useState(null)
    const navigate = useNavigate()
    const params = useParams()

    function handleBack() {
        navigate(-1)
    }

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover a nota?")

        if (confirm) {
            await api.delete(`/notes/${params.id}`)
            navigate("/")
        }
    }

    useEffect(() => {
        async function fetchDataNotes() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        } 
        fetchDataNotes()
    },[])

    return (
        <Container>
            <Header />
            {
            data && 
            <main>
                <Content>    
                    <ButtonText 
                        title="Excluir Nota"
                        onClick={handleRemove}
                    />
                    <h1>{data.title}</h1>
                    <p>
                    {data.description}
                    </p>
                    {data.links &&
                        <Section title="Links úteis">
                            <Links>
                                {
                                    data.links.map(link => (
                                        <li key={link.id}>
                                            <a 
                                                href={link.url} 
                                                target="_blank">{link.url}
                                            </a>
                                        </li>
                                    ))
                                }
                            </Links>
                        </Section>
                    }
                    {
                        data.tags &&
                        <Section title="Marcadores">
                            {
                                data.tags.map(tag => (
                                    <Tags 
                                        key={tag.id}
                                        title={tag.name}
                                    ></Tags>
                                ))
                            }
                        </Section>
                    }
                    <Button title="Voltar" onClick={handleBack}/>
                </Content>
            </main>
            }
        </Container>
    )
}
