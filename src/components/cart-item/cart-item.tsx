import { Counter } from "../counter/counter";
import css from "/src/components/cart-item/cart-item.module.css";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  count: number;
};

type CartItemViewProps = {
  item: CartItem;
  onDelete: () => void;
  onChange: (item: CartItem) => void;
};

export function CartItemView(props: CartItemViewProps) {
  return (
    <div className={css.ingredient__container}>
      <p className={css.item}>{props.item.name}</p>

      <div className={css.price__delete}>
        <div className={css.add__container}>
          <Counter
            value={props.item.count}
            min={1}
            max={10}
            onChange={(count) =>
              props.onChange({ ...props.item, count: count })
            }
          />
        </div>
        <div className={css.x}>
          <p className={css.item__green}>
            {props.item.price * props.item.count} ₽
          </p>
          <button className={css.delete__button} onClick={props.onDelete}>
            <img src="./src/img/free-icon-close-151882.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
