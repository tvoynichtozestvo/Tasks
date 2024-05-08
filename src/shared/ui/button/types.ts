import {ReactNode} from "react";

export type Props = Omit<
    React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
    'type'
> & {
    type: `${ButtonType}`
    buttonSize?: `${ButtonSize}`
    borderType?: `${BorderTypes}`
    children?: ReactNode
    htmlType?: 'button' | 'submit'
    onClick?: () => void
}

enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
}

enum ButtonSize {
    default = 'default',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

enum BorderTypes {
    default = 'default',
    strong = 'strong',
}