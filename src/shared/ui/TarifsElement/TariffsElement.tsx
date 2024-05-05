import {Props} from "./types.ts";
import cn from "classnames";
import styles from './TarrifsElement.module.scss'
import {Button} from "../button/Button.tsx";


export const  TariffsElement = ({ headerText, borderType, ...props } :Props) => {
    const classNames = cn(styles.root, {
        [styles[`root_borderType_${borderType}`]] : borderType,
    })
    return(
        <div className={classNames}>
            <div className={styles.root__wrapper}>
                <div className={styles.root_headerText}>
                    {headerText}
                </div>
                <div className={styles.root_mainText}>
                    {props.children}
                </div>
                <div className={styles.root_buttonContainer}>
                    <Button type={'primary'}>buy</Button>
                </div>

            </div>

        </div>
    )



}