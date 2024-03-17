import { useState } from "react";
import css from "./window.module.css";

type WindowProps = {
  array: { name: string; price: number; img: string }[][];
};

export function Window(props: WindowProps) {
  const [tab, setTab] = useState(1);
  const [food, setFood] = useState([]);

  return (
    <main className={css.window}>
      <div className={css.left}>
        <h2 className={css.h}>Выбери свои ингредиенты</h2>
        <div className={css.tabs}>
          <div className={css.tabs__container}>
            <p
              className={` ${tab !== 1 ? "p" : "green"}`}
              onClick={() => {
                setTab(1);
              }}
            >
              Мясо
            </p>
            <p
              className={`p ${tab === 2 ? "green" : ""}`}
              onClick={() => {
                setTab(2);
              }}
            >
              Сыр
            </p>
            <p
              className={`p ${tab === 3 ? "green" : ""}`}
              onClick={() => {
                setTab(3);
              }}
            >
              Овощи
            </p>
          </div>

          <div>
            <div className={`invisible ${tab === 1 ? "visible" : ""}`}>
              <div className={css.elements}>
                {props.array[0].map((x) => (
                  <div className={css.element__container}>
                    <div className={css.element}>
                      <img src={x.img} alt="" className={css.img} />
                      <p className={css.p}>{x.name}</p>
                      <p className={css.p}>{x.price} ₽</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`invisible ${tab === 2 ? "visible" : ""}`}>
              <div className={css.elements}>
                {props.array[1].map((x) => (
                  <div className={css.element__container}>
                    <div className={css.element}>
                      <img src={x.img} alt="" className={css.img} />
                      <p className={css.p}>{x.name}</p>
                      <p className={css.p}>{x.price} ₽</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`invisible ${tab === 3 ? "visible" : ""}`}>
              <div className={css.elements}>
                {props.array[2].map((x) => (
                  <div className={css.element__container}>
                    <div className={css.element}>
                      <img src={x.img} alt="" className={css.img} />
                      <p className={css.p}>{x.name}</p>
                      <p className={css.p}>{x.price} ₽</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.right}>
        <img
          src="./src/img/free-icon-pizza-9633377.png"
          alt=""
          className={css.pizza}
        />
        <p>Ваша пицца</p>

        <div className="">
          <p>колбаса сыр итд</p>
        </div>
      </div>
    </main>
  );
}
