import {ReactNode} from "react";

export type Props = {
    headerText?: string
    borderType?: `${BorderType}`
    children?: ReactNode
}

enum BorderType {
    free = 'free',
    Premium = 'premium',
    Diamond = 'diamond'
}

