import { Hbox, Separator } from 'components/box/box.styles'
import { TextCard } from 'components/text-card'
import { LinkButton, Spacing } from '../../../../theme'
import { CardsContainer, Container } from '../home/styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { POSITIONS_BASE_URL } from 'utils'
import { Card } from 'components'
import {
    faCheck,
    faListAlt,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons'

export interface PositionModel {
    type: string
    description: string
    required_skills: string[]
    main_work: string
    salary: number
    id: string
    cnpj: string
    benefits: string
    approved: string
}

export const PositionsPage: React.FC = () => {
    const navigate = useNavigate()

    const [positions, setPositions] = useState<PositionModel[]>()

    const storedUser = localStorage.getItem('user')
    const user = storedUser ? JSON.parse(storedUser) : {}
    const cnpj = user.nusp_cnpj

    useEffect(() => {
        axios
            .get(`${POSITIONS_BASE_URL}positions/${cnpj}`)
            .then(response => setPositions(response.data))
    }, [cnpj])

    const FilterPositionsByStatus = (status: string) => {
        axios.get(`${POSITIONS_BASE_URL}positions/${cnpj}`).then(response => {
            setPositions(
                response.data.filter(
                    (position: PositionModel) => position.approved === status,
                ),
            )
        })
    }

    return (
        <Container>
            <CardsContainer>
                <Card
                    icon={faXmarkCircle}
                    title="Recusadas"
                    onClick={() => FilterPositionsByStatus('rejected')}
                />
                <Card
                    icon={faListAlt}
                    title="Pendentes"
                    onClick={() => FilterPositionsByStatus('pending')}
                />
                <Card
                    icon={faCheck}
                    title="Aprovadas"
                    onClick={() => FilterPositionsByStatus('approved')}
                />
            </CardsContainer>

            <Separator />

            {positions?.map((position, index) => (
                <Fragment key={`${position}-${index}`}>
                    <TextCard
                        title={position.type + ' - ' + position.description}
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
