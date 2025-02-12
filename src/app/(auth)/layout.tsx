import { ReactNode } from "react";
import style from "@/app/(auth)/_styles/main.module.css";

interface ILayout {
  children: ReactNode;
  modal: ReactNode;
}

const Layout = ({ children, modal }: ILayout) => {
  return (
    <div className={style.container}>
      {children}
      {modal}
    </div>
  );
};
export default Layout;
