import { Good } from "../../additional/goods";
import css from "/src/components/good-view/good-view.module.css";

type GoodViewProps = {
  good: Good;
  onClick: () => void;
};

export function GoodView(props: GoodViewProps) {
  return (
    <div className={css.element} onClick={props.onClick}>
      <img src={props.good.img} alt="" className={css.img} />
      <p className={css.p}>{props.good.name}</p>
      <p className={css.p}>
        <span className={css.green__span}>{props.good.price} ₽</span>
      </p>
    </div>
  );
}
