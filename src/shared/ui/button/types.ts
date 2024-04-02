import {ReactNode} from "react";

export type Props = Omit<
    React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
    'type'
> & {
    type: `${ButtonType}`
    buttonSize: `${ButtonSize}`
    children: ReactNode
    htmlType?: 'button' | 'submit'


}

enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
    Black = 'black'
}

enum ButtonSize {
    default = 'default',
    small = 'small',
    medium = 'medium',
}