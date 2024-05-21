import Image from 'next/image';
import styles from './aside.module.css';

import Logo from './logo.png';

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Image src={Logo} alt="Logo da Code Connect" priority />
    </aside>
  );
}