import styles from './NewTask.module.css'
import CriarNoHover from '../assets/CriarNoHover.svg'

export function NewTask () {
    return (
        <div className={styles.NewTask}>
                <input className={styles.novatarefa} placeholder="Adicone uma nova tarefa" 
                />
            <img src={CriarNoHover} alt= "Criar" />
            </div>
    )
}