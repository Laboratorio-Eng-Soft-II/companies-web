import { Hbox, Separator } from 'components/box/box.styles'
import { TextCard } from 'components/text-card'
import logoPoli from '../../../../assets/LogoEPUSP.png'
import { H1, H2, LinkButton, Spacing } from '../../../../theme'
import { Container } from '../home/styles'
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react'

export const MOCK_POSITIONS = [
    {
        title: 'Vaga 1',
        description: 'Descrição sobre a vaga 1',
        requirements: [],
        activities: 'Desenvolvimento front-end de um aplicativo mobile',
        salary: 4000,
        id: '1',
    },
    {
        title: 'Vaga 2',
        description: 'Descrição sobre a vaga 2',
        requirements: [],
        activities: 'Desenvolvimento back-end de um servidor',
        salary: 5000,
        id: '2',
    },
    {
        title: 'Vaga 3',
        description: 'Descrição sobre a vaga 3',
        requirements: [],
        activities: 'Desenvolvimento full stack',
        salary: 6000,
        id: '3',
    },
]

export const PositionsPage: React.FC = () => {
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
            <H2>Todas as vagas</H2>
            {MOCK_POSITIONS.map((position, index) => (
                <Fragment key={`${position}-${index}`}>
                    <TextCard
                        title={position.title + ' - ' + position.description}
                        onClick={() =>
                            navigate(`/companies/positions/${position.id}`)
                        }
                    />
                    <Separator size={Spacing.Small} />
                </Fragment>
            ))}
            <Hbox>
                <Hbox.Item>
                    <LinkButton onClick={() => navigate('/companies/home')}>
                        Voltar
                    </LinkButton>
                </Hbox.Item>
            </Hbox>
        </Container>
    )
}
