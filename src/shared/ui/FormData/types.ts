
export interface Props {
    title: string
    button: string
    inputFields: InputField[]
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface InputField {
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
