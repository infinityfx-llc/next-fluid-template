import styles from './header.module.css';

import { ThemeToggle } from "@infinityfx/fluid";

export default function Header() {

    return <header className={styles.header}>
        Next Fluid Template
        
        <ThemeToggle />
    </header>;
}