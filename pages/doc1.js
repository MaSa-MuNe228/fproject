import {motion} from 'framer-motion'
import styles from '../styles/Home.module.css'
import fadeInUp from '../components/fadeInUp'

export default function doc1(){
    return (
        <motion.div exit='exit' initial="initial" animate="animate" >
            <motion.div className={styles.main} variants={fadeInUp}>
                <div className={styles.paragraph}>
                    <h1>Описательная модель</h1>
                <p>Задача: необходимо задать скорость и угол брасания мяча, для попадания в стенку определенной высоты, находящееся на известном расстоянии.</p>
                <p>Из условия можно сформулировать следующее:</p>
                <ol>
                    <li>Мяч мал по сравнению с землей, а потому его можно считать
                        материальной точкой.
                    </li>
                    <li>Изменение высоты мячика мало, поэтому ускорение свободного
                        падения g=9,8м/c<sup>2</sup>, 
                        следовательно движение по оси y будет равноускоренным.
                    </li>
                    <li>
                        Скорость брасания мячика мала, поэтому сопротивлением воздуха
                        можно пренебречь, а потому движение по оси x является равномерным
                    </li>
                </ol>
                <p>Следовательно, для построения модели нам понадобятся формулы движения тела,
                    брошенного под углом к горизонту.
                </p>
                <p>Для большей наглядности построим таблицу со всеми нужными нам
                    значениями, т.е. время, скорось, расстояние и т.д, и,
                    основываясь на данные из этой таблицы, построим графики движения мячика.
                </p>
                </div>
            </motion.div>
        </motion.div>
    )
}