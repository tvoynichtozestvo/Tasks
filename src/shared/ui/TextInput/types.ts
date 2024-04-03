
export type Props = {
    type: `${InputType}`
    inputSize?: `${InputSize}`
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