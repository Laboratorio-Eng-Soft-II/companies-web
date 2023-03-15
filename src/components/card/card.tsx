import { CardContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Colors, Label } from '../../theme'

interface CardProps {
    icon: IconProp
    title: string
    onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ icon, title, onClick }) => {
    return (
        <CardContainer role="button" onClick={onClick}>
            <FontAwesomeIcon icon={icon} size="2x" color={Colors.primary} />
            <Label>{title}</Label>
        </CardContainer>
    )
}
