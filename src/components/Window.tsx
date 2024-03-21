import { useState } from "react";
import css from "./window.module.css";
import { CartItem, CartItemView } from "./cart-item";
import { Good, goods } from "./goods";
import { useImmer } from "use-immer";
import { GoodView } from "./good-view";
import { Cart } from "./Cart";
import { CartOpener } from "./CartOpener";
// import { Tabs } from "../ui/tabs";

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
        <main className={css.window}>
            <div className={css.left}>
                <h2 className={css.h}>Выбери свои ингредиенты</h2>
                <div className={css.tabs}>
                    <div className={css.tabsContainer}>
                        <p className={`${css.p} ${tab === 1 ? css.tabActive : ""}`} onClick={() => setTab(1)}>
                            Мясо
                        </p>
                        <p className={`${css.p} ${tab === 2 ? css.tabActive : ""}`} onClick={() => setTab(2)}>
                            Сыр
                        </p>
                        <p className={`${css.p} ${tab === 3 ? css.tabActive : ""}`} onClick={() => setTab(3)}>
                            Овощи
                        </p>
                    </div>

                    <div>
                        {tab === 1 && (
                            <div className={css.elements}>
                                {goods[0].map((x) => (
                                    <GoodView key={x.id} good={x} onClick={() => addCartItem(x)} />
                                ))}
                            </div>
                        )}
                        {tab === 2 && (
                            <div className={css.elements}>
                                {goods[1].map((x) => (
                                    <GoodView key={x.id} good={x} onClick={() => addCartItem(x)} />
                                ))}
                            </div>
                        )}
                        {tab === 3 && (
                            <div className={css.elements}>
                                {goods[2].map((x) => (
                                    <GoodView key={x.id} good={x} onClick={() => addCartItem(x)} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {active && <Cart onClick={setActive} totalPrice={sum + startPrice} />}
            </div>
            <div className={css.right}>
                <img src="./src/img/free-icon-pizza-9633377.png" alt="" className={css.pizza} />
                <h1 className={css.title}>Ваша пицца</h1>
                <p className={css.first__price}> Начальная цена пиццы: {startPrice} ₽</p>
                <div className={css.amount}>
                    {cartItems.map((item, i) => (
                        <CartItemView
                            key={item.id}
                            item={item}
                            onChange={(newItem) => {
                                updateCartItems((draft) => {
                                    draft[i] = newItem;
                                    // draft[i].count = newItem.count
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
        </main>
    );
}
