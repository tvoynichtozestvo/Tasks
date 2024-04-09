import AuthForm from "../../shared/ui/FormData/FormData.tsx";
import styles from "./Form.module.scss";
import ContainerToForm from "../../shared/ui/ConteinerToForm/Container.tsx";
import {Link} from "react-router-dom";

export default function Form(){
    return(
        <ContainerToForm rootClassName={styles.root} className={styles.root__wrapper}>
            <div>
            <AuthForm
                title={'Login'}
                button={'Login'}
                inputFields={[
                    { id: 'username', placeholder: 'Login', type: 'primary', inputSize:'medium' },
                    { id: 'password', placeholder: 'Password', type: 'primary', inputSize: 'medium' }
                ]}>
            </AuthForm>
            </div>

            <div>
            <Link to={'https://www.youtube.com/watch?v=wv969vgqwDw'}>Forgot password?</Link>
            <Link to={'/register'}>register</Link>
            </div>

        </ContainerToForm>
    )
}