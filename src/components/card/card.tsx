import { CardContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Label } from '../../theme'

interface CardProps {
    icon: IconProp
    title: string
}

export const Card: React.FC<CardProps> = ({ icon, title }) => {
    return (
        <CardContainer>
            <FontAwesomeIcon icon={icon} size="2x" color="black" />
            <Label>{title}</Label>
        </CardContainer>
    )
}
