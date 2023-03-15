import logoPoli from '../../../../assets/LogoEPUSP.png'
import { Card } from '../../../../components/card'
import { CardsContainer, Container } from './styles'
import {
    faCalendar,
    faBuilding,
    faFileAlt,
    faListAlt,
    faStar,
} from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Body, H1 } from '../../../../theme'
import { AppPath } from '../../../routes/app.path'
import { Separator } from 'components/box/box.styles'

export const CompaniesHomePage = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <img
                width="100px"
                height="100px"
                src={logoPoli}
                alt="logo da Poli"
            ></img>
            <H1 textAlign="center">Internship 4.0 - Portal de estágios</H1>
            <Body textAlign="center">
                O Portal de Estágios é o Ecossistema de Talentos da Escola
                Politécnica da Universidade de São Paulo. Aqui a Escola, as
                Empresas e os Alunos transformam sonhos em realidades
            </Body>
            <Separator />

            <CardsContainer>
                <Card icon={faBuilding} title="Sua Empresa" />
                <Card
                    icon={faFileAlt}
                    title="Publicar Vaga"
                    onClick={() => navigate(AppPath.companies.publishJob)}
                />
                <Card
                    icon={faListAlt}
                    title="Todas as Vagas"
                    onClick={() => navigate(AppPath.companies.positions)}
                />
                <Card icon={faCalendar} title="Calendário" />
                <Card icon={faStar} title="Avaliação do Estagiário" />
            </CardsContainer>
        </Container>
    )
}
