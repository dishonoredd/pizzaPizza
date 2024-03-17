import { useState } from "react";
import css from "./window.module.css";
import { CartItem, CartItemView } from "./cart-item";
import { Good, goods } from "./goods";
import { useImmer } from "use-immer";
import { GoodView } from "./good-view";
import { Tabs } from "../ui/tabs";

export function Window() {
    const [tab, setTab] = useState(1);
    const [cartItems, updateCartItems] = useImmer<CartItem[]>([]);

    function addCartItem(good: Good) {
        const isAlreadyExist = cartItems.some((x) => x.id === good.id);
        if (isAlreadyExist) return;

        updateCartItems((draft) => {
            draft.push({
                name: good.name,
                price: good.price,
                id: good.id,
            });
        });
    }

    return (
        <main className={css.window}>
            <Tabs
                tabs={[
                    { id: "1", label: "Первый таб", content: <p>Hello 1</p> },
                    { id: "2", label: "Второй таб", content: <p>Hello 2</p> },
                    { id: "3", label: "Третий таб", content: <p>Hello 3</p> },
                ]}
                onChange={() => {}}
            />
            <div className={css.left}>
                <h2 className={css.h}>Выбери свои ингредиенты</h2>
                <div className={css.tabs}>
                    <div className={css.tabs__container}>
                        <p className={` ${tab !== 1 ? "p" : "green"}`} onClick={() => setTab(1)}>
                            Мясо
                        </p>
                        <p className={`p ${tab === 2 ? "green" : ""}`} onClick={() => setTab(2)}>
                            Сыр
                        </p>
                        <p className={`p ${tab === 3 ? "green" : ""}`} onClick={() => setTab(3)}>
                            Овощи
                        </p>
                    </div>

                    <div>
                        <div className={`invisible ${tab === 1 ? "visible" : ""}`}>
                            <div className={css.elements}>
                                {goods[0].map((x) => (
                                    <GoodView key={x.id} good={x} onClick={() => addCartItem(x)} />
                                ))}
                            </div>
                        </div>

                        <div className={`invisible ${tab === 2 ? "visible" : ""}`}>
                            <div className={css.elements}>
                                {goods[1].map((x) => (
                                    <GoodView key={x.id} good={x} onClick={() => addCartItem(x)} />
                                ))}
                            </div>
                        </div>
                        <div className={`invisible ${tab === 3 ? "visible" : ""}`}>
                            <div className={css.elements}>
                                {goods[2].map((x) => (
                                    <GoodView key={x.id} good={x} onClick={() => addCartItem(x)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.right}>
                <img src="./src/img/free-icon-pizza-9633377.png" alt="" className={css.pizza} />
                <p>Ваша пицца</p>

                <div className="">
                    <p>колбаса сыр итд</p>
                </div>

                {cartItems.map((item, i) => (
                    <CartItemView
                        key={item.id}
                        item={item}
                        onDelete={() => {
                            updateCartItems((draft) => {
                                draft.splice(i, 1);
                            });
                        }}
                    />
                ))}
            </div>
        </main>
    );
}
