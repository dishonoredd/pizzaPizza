import { useState } from "react";
import css from "/src/components/window/window.module.css";
import pizzaImg from "/src/img/free-icon-pizza-9633377.png";
import { Good, goods } from "../../additional/goods";
import { useImmer } from "use-immer";

import { CartOpener } from "../cart-opener/cart-opener";
import { Cart } from "../carts/cart";
import { CartItem, CartItemView } from "../cart-item/cart-item";
import { GoodView } from "../good-view/good-view";

const startPrice = 590;

export function Window() {
  const [tab, setTab] = useState(1);
  const [cartItems, updateCartItems] = useImmer<CartItem[]>([]);
  const [active, setActive] = useState(false);

  function addCartItem(good: Good) {
    const isAlreadyExist = cartItems.some((x) => x.id === good.id);

    if (isAlreadyExist) return;

    updateCartItems((draft) => {
      draft.push({
        name: good.name,
        price: good.price,
        id: good.id,
        count: 1,
      });
    });
  }

  let sum = 0;
  cartItems.forEach((item) => (sum += item.count * item.price));

  return (
    <div className={css.window}>
      <div className={css.left}>
        <h2 className={css.h}>Выбери свои ингредиенты</h2>
        <div className={css.tabs}>
          <div className={css.tabs__container}>
            <p
              className={`p ${tab === 1 ? "green" : ""}`}
              onClick={() => setTab(1)}
            >
              Мясо
            </p>
            <p
              className={`p ${tab === 2 ? "green" : ""}`}
              onClick={() => setTab(2)}
            >
              Сыр
            </p>
            <p
              className={`p ${tab === 3 ? "green" : ""}`}
              onClick={() => setTab(3)}
            >
              Овощи
            </p>
          </div>

          <div>
            {tab === 1 && (
              <div className={css.elements}>
                {goods[0].map((x) => (
                  <GoodView
                    key={x.id}
                    good={x}
                    onClick={() => addCartItem(x)}
                  />
                ))}
              </div>
            )}
            {tab === 2 && (
              <div className={css.elements}>
                {goods[1].map((x) => (
                  <GoodView
                    key={x.id}
                    good={x}
                    onClick={() => addCartItem(x)}
                  />
                ))}
              </div>
            )}
            {tab === 3 && (
              <div className={css.elements}>
                {goods[2].map((x) => (
                  <GoodView
                    key={x.id}
                    good={x}
                    onClick={() => addCartItem(x)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {active && <Cart onClick={setActive} totalPrice={sum + startPrice} />}
      </div>
      <div className={css.right}>
        <img src={pizzaImg} alt="" className={css.pizza} />
        <h1 className={css.title}>Ваша пицца</h1>
        <p className={css.first__price}>Начальная цена пиццы: {startPrice} ₽</p>
        <div className={css.amount}>
          {cartItems.map((item, i) => (
            <CartItemView
              key={item.id}
              item={item}
              onChange={(newItem) => {
                updateCartItems((draft) => {
                  draft[i] = newItem;
                });
              }}
              onDelete={() => {
                updateCartItems((draft) => {
                  draft.splice(i, 1);
                });
              }}
            />
          ))}
        </div>
        <CartOpener onClick={setActive} sum={sum} startPrice={startPrice} />
      </div>
    </div>
  );
}
