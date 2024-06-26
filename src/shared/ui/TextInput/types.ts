export type Props = Omit<
    React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
    'type'
> & {
    type: `${InputType}`
    inputSize?: `${InputSize}`
    id?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
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