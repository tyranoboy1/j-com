import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_styles/main.module.css";

interface ILayout {
  children: ReactNode;
  modal: ReactNode;
}

const Layout = ({ children, modal }: ILayout) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
};
export default Layout;
