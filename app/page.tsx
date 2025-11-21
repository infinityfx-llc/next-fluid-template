import Link from 'next/link';
import styles from './page.module.css';
import { Button } from '@infinityfx/fluid';

export default function Page() {

    return <main className={styles.main}>
        <Link href="https://fluid.infinityfx.dev/docs/get-started" tabIndex={-1}>
            <Button>
                Get started
            </Button>
        </Link>
    </main>;
}