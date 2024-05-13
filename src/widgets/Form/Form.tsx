import AuthForm from "../../shared/ui/FormData/FormData.tsx";
import styles from "./Form.module.scss";
import ContainerToForm from "../../shared/ui/ConteinerToForm/Container.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../shared/ui/button/Button.tsx";

export default function Form(){
    const navigate = useNavigate()
    function handleLogin(){
        navigate('/profile')
    }
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
                <Button type={'primary'} borderType={'strong'} buttonSize={'large'} onClick={handleLogin}>Login</Button>
            </div>

            <div>
            <Link to={'https://www.youtube.com/watch?v=wv969vgqwDw'}>Forgot password?</Link>
            <Link to={'/register'}>register</Link>
            </div>

        </ContainerToForm>
    )
}