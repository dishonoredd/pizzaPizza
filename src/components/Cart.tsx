import css from "./window.module.css";

type CartProps = {
    onClick: (value: boolean) => void;
    totalPrice: number;
};

export function Cart(props: CartProps) {
    return (
        <div className={css.left__bottom}>
            <button className={css.delete__cart} onClick={() => props.onClick(false)}>
                <img src="./src/img/free-icon-close-151882.png" alt="" />
            </button>
            <h1 className={css.h} style={{ paddingLeft: "0px", paddingTop: "0px" }}>
                Корзина
            </h1>
            <p className={css.summa}>
                Цена всего заказа:
                <span className={css.green__span}> {props.totalPrice} ₽</span>
            </p>

            <button className={css.basket__btn} style={{ width: "210px", marginTop: "20px" }}>
                Перейти к оплате
            </button>
        </div>
    );
}
