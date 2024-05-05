import {ReactNode} from "react";

export type Props = {
    // type: `${ContainerType}`
    children: ReactNode
    className?: string
    rootClassName?: string
    task?: string
    notes?: string
    settings?: string
    profile?: string
    isSidebar?: string


}



/* enum ContainerType {
    Primary = 'primary',
    Secondary = 'secondary',
} */