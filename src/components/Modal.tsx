import { BsXLg } from "react-icons/bs";

// CSS
import styles from "./Modal.module.css";

interface Props {
    children: React.ReactNode;
}

const Modal = ({children}: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  }

  return (
    <div id='modal' className="hide">
        <div className={styles.fade}></div>
        <div className={styles.modal}>
            <BsXLg onClick={closeModal} />
            <h2>Texto modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal;