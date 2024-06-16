import styles from './TasksListElement.module.scss'
import { Props } from './types.ts'


export default function TasksListElement(props :Props) {
    return(
        <div >
            {props.DataFields.map((data) =>(
            <div id={data.id} className={styles.root__wrapper}>
                <div className={styles.root_radioContainer}>
                    <input type={"radio"}/>
                </div>
                <div className={styles.root_taskValueContainer}>
                    {data.title}
                </div>
                <div className={styles.root_taskDateContainer}>
                    {data.date}
                </div>
            </div>
            ))}
        </div>

    )
}
