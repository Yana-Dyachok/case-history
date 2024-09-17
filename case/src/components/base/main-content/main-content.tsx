import photo from '../../../assets/img/oksana.jpg';
import styles from './main-content.module.css';

function MainContent() {
  return (
    <article className={styles.container}>
      <div className={styles.imgBlock}>
        <img src={photo} alt="patient" className={styles.img} />
      </div>
      <div className={styles.cardInfoBlock}>
        <h3 className={styles.cardName}>Федоришина Оксана Володимирівна</h3>
        <p className={styles.cardTitle}>Діагноз:</p>
        <p className={styles.cardDiagnosis}>
          Класична лімфома Ходжкіна, змішано-клітинний варіант (за даними
          гістологічного, ІГХ-дослідження біопсованого шийного лімфовузла
          праворуч від 15/05/2024 - м.Вінниця, 21/05/2024, гістологічного
          дослідження - лаб. CSD від 31/05/2024, ІГХ в роботі), IIBст. з
          ураженням лімфатичних вузлів вище діафрагми (за даними КТ від
          23.05.2024). Інтоксикаційний синдром (профузна нічна пітливість)
        </p>
      </div>
    </article>
  );
}

export default MainContent;
