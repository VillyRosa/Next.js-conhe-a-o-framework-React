import styles from './avatar.module.css';
import Image from "next/image";

export default function Avatar({ name, imageSrc }) {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image 
          src={imageSrc} 
          alt={name} 
          width={32} 
          height={32} 
          priority
        />
      </li>
      <li>
        @{name}
      </li>
    </ul>
  )
}