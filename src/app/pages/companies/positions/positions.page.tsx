import { Separator } from 'components/box/box.styles'
import { TextCard } from 'components/text-card'
import logoPoli from '../../../../assets/LogoEPUSP.png'
import { H1, H2, Spacing } from '../../../../theme'
import { Container } from '../home/styles'

const MOCK_POSITIONS = [
    {
        title: 'Vaga 1',
        description: 'Descrição sobre a vaga 1',
        requirements: [],
        activities: 'Desenvolvimento front-end de um aplicativo mobile',
        salary: 4000,
    },
    {
        title: 'Vaga 2',
        description: 'Descrição sobre a vaga 2',
        requirements: [],
        activities: 'Desenvolvimento back-end de um servidor',
        salary: 5000,
    },
    {
        title: 'Vaga 3',
        description: 'Descrição sobre a vaga 3',
        requirements: [],
        activities: 'Desenvolvimento full stack',
        salary: 6000,
    },
]

export const PositionsPage: React.FC = () => {
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
            {MOCK_POSITIONS.map(position => (
                <>
                    <TextCard
                        title={position.title + ' - ' + position.description}
                        onClick={() =>
                            console.log(
                                'TO DO: open ' + position.title + ' page',
                            )
                        }
                    />
                    <Separator size={Spacing.Small} />
                </>
            ))}
        </Container>
    )
}
