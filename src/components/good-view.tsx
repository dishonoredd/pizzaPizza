import { Good } from "./goods";
import css from "./window.module.css";

type GoodViewProps = {
  good: Good;
  onClick: () => void;
};

export function GoodView(props: GoodViewProps) {
  return (
    <div className={css.element__container} onClick={props.onClick}>
      <div className={css.element}>
        <img src={props.good.img} alt="" className={css.img} />
        <p className={css.p}>{props.good.name}</p>
        <p className={css.p}>
          <span className={css.green__span}>{props.good.price} ₽</span>
        </p>
      </div>
    </div>
  );
}
