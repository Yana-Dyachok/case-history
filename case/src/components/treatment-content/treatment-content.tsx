import ImgSlider from "../../components/ui/each-img-slider/img-slider";
import { urologTreatmentArray } from "../../mockAPI/db";
import styles from '../main-content/main-content.module.css'
function TreatmentContent() {
  return ( <>
  <div className={styles.container}>
  <ImgSlider documentsImg={urologTreatmentArray} />
  </div>
    </>
);
}

export default TreatmentContent;
