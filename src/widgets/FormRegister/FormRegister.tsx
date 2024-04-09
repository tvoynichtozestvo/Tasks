import AuthForm from "../../shared/ui/FormData/FormData.tsx";
import styles from "./Form.module.scss";
import ContainerToForm from "../../shared/ui/ConteinerToForm/Container.tsx";

export default function FormRegister(){
    return(
        <ContainerToForm rootClassName={styles.root} className={styles.root__wrapper}>
            <AuthForm
                title={'Register'}
                button={'Register'}
                inputFields={[
                    { id: 'password', placeholder: 'Email', type: 'primary', inputSize: 'medium' },
                    { id: 'password', placeholder: 'Login', type: 'primary', inputSize: 'medium' },
                    { id: 'password', placeholder: 'Password', type: 'primary', inputSize: 'medium' },
                    { id: 'password', placeholder: 'Confirm password', type: 'primary', inputSize: 'medium' }
                ]}>
            </AuthForm>
        </ContainerToForm>
    )
}