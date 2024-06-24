import ImgSlider from "../../components/ui/each-img-slider/img-slider";
import { documentsArray } from "../../mockAPI/db";
import styles from './main-content.module.css'
function MainContent() {
  return ( <>
  <div className={styles.container}>
  <ImgSlider documentsImg={documentsArray} />
  </div>
    </>
);
}

export default MainContent;
