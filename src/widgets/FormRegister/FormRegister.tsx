import AuthForm from "../../shared/ui/FormData/FormData.tsx";
import styles from "./Form.module.scss";
import ContainerToForm from "../../shared/ui/ConteinerToForm/Container.tsx";
import {Link} from "react-router-dom";

export default function FormRegister(){
    return(
        <ContainerToForm rootClassName={styles.root} className={styles.root__wrapper}>
            <div>
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
            </div>
            <div>
                <Link to={'https://www.youtube.com/watch?v=wv969vgqwDw'}>Forgot password?</Link>
                <Link to={'/login'}>login</Link>
            </div>

        </ContainerToForm>
    )
}