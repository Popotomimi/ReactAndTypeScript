import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <p>
                    <span>React + TS Todo</span> @ 2021
                </p>
            </footer>
        </div>
    )
}

export default Footer;