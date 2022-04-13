import style from "./scss/Preloader.module.css";

export default function Preloader() {
  return (
    <div className={style.preloader}>
      <div className={style.loader}>
        <p>Manouchehr Ghalevand</p>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
