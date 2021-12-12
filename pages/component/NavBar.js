import Link from "next/link";
import styles from "../../styles/NavBar.module.css"
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <ul className={styles.navbar}>
          <Link href="/"><Image src="/pic1.png" width={130} height={60}></Image></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
          <Link href="/posts"><li>Posts</li></Link>
      </ul>
    </>
  );
};

export default NavBar;

