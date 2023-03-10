import {
    faCalendar,
    faBuilding,
    faFileAlt,
    faListAlt,
    faStar,
} from '@fortawesome/free-regular-svg-icons'
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

export const Icon = {
    Calendar: (props: FontAwesomeIconProps) => (
        <FontAwesomeIcon {...props} icon={faCalendar} />
    ),
    Building: (props: FontAwesomeIconProps) => (
        <FontAwesomeIcon {...props} icon={faBuilding} />
    ),
    FileAlt: (props: FontAwesomeIconProps) => (
        <FontAwesomeIcon {...props} icon={faFileAlt} />
    ),
    ListAlt: (props: FontAwesomeIconProps) => (
        <FontAwesomeIcon {...props} icon={faListAlt} />
    ),
    Start: (props: FontAwesomeIconProps) => (
        <FontAwesomeIcon {...props} icon={faStar} />
    ),
}
