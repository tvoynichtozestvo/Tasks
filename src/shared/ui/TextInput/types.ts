import {ReactNode} from "react";

export type Props = Omit<
    React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
    'type'
> & {
    type: `${InputType}`
    inputSize?: `${InputSize}`
    children?: ReactNode
}

enum InputType {
    Primary = 'primary',
    Secondary = 'secondary'
}

enum InputSize {
    default = 'default',
    small = 'small',
    medium = 'medium',
    large = 'large',
}