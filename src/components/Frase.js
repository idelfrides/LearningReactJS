import styles from './Frase.module.css';

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>This is a component with a frase!</p>
        </div>
    )
}

export default Frase;