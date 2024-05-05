import {TariffsElement} from "../../shared/ui/TarifsElement/TariffsElement.tsx";
import Container from "../../shared/ui/Conteiner/Container.tsx";
import styles from './Tariffs.module.scss'
export default function Tariffs(){
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <div>
            <TariffsElement borderType={'free'} headerText={'Free'}>
                <ul>
                    <li>Ограниченное количество заметок.</li>
                    <li>Создание и хранение базовых заметок.</li>
                    <li>Ограниченный объем хранимых данных.</li>
                    <li>Ограниченный доступ к расширенным функциям.</li>
                    <li>Отсутствие синхронизации между устройствами.</li>
                </ul>
            </TariffsElement>
            </div>
            <div>
            <TariffsElement borderType={'premium'} headerText={'Premium'}>
                <ul>
                    <li>Неограниченное количество заметок.</li>
                    <li>Расширенные функции редактирования и оформления заметок.</li>
                    <li>Синхронизация между устройствами.</li>
                    <li>Возможность добавления вложенных категорий или меток для структурирования данных.</li>
                </ul>
            </TariffsElement>
            </div>
            <div>
            <TariffsElement borderType={'diamond'} headerText={'Diamond'}>
                <ul>
                    <li>Все возможности Premium.</li>
                    <li>Дополнительные функции безопасности, такие как двухфакторная аутентификация.</li>
                    <li>Расширенные средства аналитики или отчетности.</li>
                    <li>Первый доступ ко всем новым функциям.</li>
                </ul>
            </TariffsElement>
            </div>
        </Container>
    )
}