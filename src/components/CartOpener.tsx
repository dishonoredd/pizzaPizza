import css from "./window.module.css";

type CartOpener = {
    onClick: (bool: boolean) => void;
    sum: number;
    startPrice: number;
};

export function CartOpener(props: CartOpener) {
    return (
        <div className={css.bottom}>
            {" "}
            <p className={css.p}>
                Цена ингредиентов:
                <span className={css.green__span}> {props.sum}</span>
            </p>
            <button className={css.basket__btn} onClick={() => props.onClick(true)}>
                В корзину
            </button>
        </div>
    );
}
