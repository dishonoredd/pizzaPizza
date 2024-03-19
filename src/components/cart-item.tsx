import { useState } from "react";
import css from "./window.module.css";

export type CartItem = {
  id: string;
  name: string;
  price: number;
};

type CartItemViewProps = {
  item: CartItem;
  onDelete: () => void;
};

export function CartItemView(props: CartItemViewProps) {
  return (
    <div className={css.ingredient__container}>
      <p className={css.item}>{props.item.name}</p>{" "}
      <div className={css.price__delete}>
        <div className={css.add__container}>
          <button className={css.plusminus}>
            <img src="./src/img/free-icon-minus-2550003.png" alt="" />
          </button>
          <p className={css.item__green} style={{ color: "rgb(185, 0, 0)" }}>
            {32}
          </p>
          <button className={css.plusminus}>
            <img src="./src/img/free-icon-plus-2549959.png" alt="" />
          </button>
        </div>
        <div className={css.x}>
          <p className={css.item__green}>{props.item.price} ₽</p>
          <button className={css.delete__button} onClick={props.onDelete}>
            <img src="./src/img/free-icon-close-151882.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
