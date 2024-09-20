import Tags from '../../components/ui/tags/tags';
import styles from '../anamnesis-morbi/anamnesis-morbi.module.css';

function AnamnesisVitePage() {
  return (
    <div className={styles.container}>
      <Tags.H1>Anamnesis Vitae</Tags.H1>
      <p>
        Народилася третьою дитиною в сім&apos;ї, 26.05.2000 р. в с. Мовчанівка,
        вагітність та роди протікали без патологій, була доношеною. Природнє
        вигодовування до 1.5 року. Розвивалась в задовільних
        матеріально-побутових умовах. В школу пішла в 6 років, вчилась добре, у
        розумовому та фізичному розвитку не відставала від своїх однолітків.
        Вакцинована згідно календаря профілактичних щеплень. Закінчила на добре
        ВНТУ та здобула кваліфікацію інженера (кібербезпека).
      </p>

      <div className={styles.itemBlock}>
        {' '}
        <Tags.H2>Перенесені захворювання:</Tags.H2>
        <p>ГРВІ, гострий тонзиліт 2017, гастрит</p>
      </div>
      <div className={styles.itemBlock}>
        {' '}
        <Tags.H2>Оперативні втручання:</Tags.H2>
        <p>
          ПХО рани на лівій гомілці, відкрита біопсія шийного лімфовузла справа
        </p>
      </div>

      <div className={styles.itemBlock}>
        {' '}
        <Tags.H2>Травми:</Tags.H2>
        <p>
          перелом правої ключиці, перелом п’ясткових кісток лівої кисті, рвана
          рана на лівій гомілці
        </p>
      </div>
      <div className={styles.itemBlock}>
        <Tags.H2>Сімейний анамнез:</Tags.H2>
        <p>одружена, дітей не має.</p>
      </div>

      <div />
      <Tags.H2>Гінекологічний анамнез:</Tags.H2>
      <p>
        Menarche в 13 років, регулярні, тривають від 5 до 6 діб, виділення в
        середній кількості. Вагітностей, пологів НЕ було.
      </p>
      <div className={styles.itemBlock}>
        <Tags.H2>Шкідливі звички:</Tags.H2>
        <p>не палить, не вживає часто алкогольні напої.</p>
      </div>
      <div className={styles.itemBlock}>
        <Tags.H2>Алергологічний анамнез:</Tags.H2>{' '}
        <p>обтяжений: на пил, плісняву.</p>
      </div>

      <Tags.H2>Спадковий анамнез:</Tags.H2>
      <p>
        {' '}
        у мами-?, у тітки по татовій лінії , у дядька по маминій лінії
        бронхіальна астма. У тата, мами, баби та діда(ГПМК) по маминій лінії
        гіпертонічна хвороба. У мами ЦД II типу з 49 років. У діда по татовій
        лінії Са кишківника, помер від ТЕЛА
      </p>
      <Tags.H2>Соціально-побутовий анамнез:</Tags.H2>
      <p>
        Почала працювати з 18 років, в 18 років влітку працювала в контакт
        центрі, в 19 років 8 місяців працювала оператором комп’ютерного набору,
        з квітня 2021 року по лютий 2024 року працювала на посаді проєктного
        менеджера, з лютого по травень 2024 року працювала тестувальником
        програмного забезпечення.
      </p>
    </div>
  );
}

export default AnamnesisVitePage;
