import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.icons}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.myIcon}
            src="/cherr_icon.svg"
            alt="cherr icon"
            width={250}
            height={250}
            priority
          />
        </div>
        <div className={styles.iconLine}></div>
        <div className={styles.iconContainer}>
          <Link
            className={styles.icon}
            href="https://github.com/cherr0406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.iconImage}
              src="/github-mark.svg"
              alt="github icon"
              width={50}
              height={50}
            />
          </Link>
          <span className={styles.iconText}>GitHub</span>
        </div>
        <div className={styles.iconLine}></div>
        <div className={styles.iconContainer}>
          <Link
            className={styles.icon}
            style={{ backgroundColor: "#000" }}
            href="https://x.com/cherr0406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.iconImage}
              src="/x_logo.svg"
              alt="x icon"
              width={50}
              height={50}
            />
          </Link>
          <span className={styles.iconText}>X</span>
        </div>
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>
          <div className={styles.titleLine}></div>Cherr&apos;s website
        </h1>
        <p>
          A student majoring in computer engineering. <br />
          I&apos;m interested in software engineering, web developing and machine learning.
        </p>
        <p>
          <Link href="#profile">Detail profile</Link>
        </p>
        <div className={styles.update}>
          <h3>Update</h3>
          <ul>
            <li>2024.05.07: Opened this website</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
