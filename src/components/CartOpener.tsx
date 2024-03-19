import css from "./window.module.css";

type CartOpener = {
  setActive: (bool: boolean) => void;
  sum: number;
  startPrice: number;
};

export function CartOpener(props: CartOpener) {
  return (
    <div className={css.bottom}>
      {" "}
      <p className={css.p}>
        Цена ингредиентов:
        <span className={css.green__span}> {props.sum - props.startPrice}</span>
      </p>
      <button className={css.basket__btn} onClick={() => props.setActive(true)}>
        В корзину
      </button>
    </div>
  );
}
