import React from "react";
import styles from './Header.module.css'
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <h1 className={styles.storeName}><Link href="/" className={styles.linkDecoratin}>烏龍麵</Link></h1>
          <ul className={styles.menu}>
            <li><Link href="/news" className={styles.linkDecoratin}>最新消息</Link></li>
            <li><Link href="/about" className={styles.linkDecoratin}>關於我們</Link></li>
            <li><Link href="/foods" className={styles.linkDecoratin}>美味餐點</Link></li>
            <li><Link href="/location" className={styles.linkDecoratin}>店鋪位置</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
