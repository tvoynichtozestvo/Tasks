import { useState } from 'react'
import styles from './FormData.module.scss'
import { Props } from './types.ts'
import {TextInput} from "../TextInput/TextInput.tsx";
import {Button} from "../button/Button.tsx";

export default function AuthForm(props: Props) {
    const [formData, setFormData] = useState({})

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <form className={styles.root} onSubmit={props.onSubmit}>
            <h2>{props.title}</h2>
            <div className={styles.fields}>
                {props.inputFields.map((field) => (
                    <TextInput
                        type={field.type}
                        id={field.id}
                        inputSize={field.inputSize}
                        value={field.value}
                        placeholder={field.placeholder}
                        onChange={handleInputChange}
                         />
                ))}
            </div>
            <Button type={'primary'} borderType={'strong'} buttonSize={'large'}>{props.button}</Button>
        </form>
    )
}
