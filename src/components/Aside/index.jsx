import Image from 'next/image';
import styles from './aside.module.css';

import Logo from './logo.png';
import Link from 'next/link';

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <Image src={Logo} alt="Logo da Code Connect" priority />
      </Link>
    </aside>
  );
}