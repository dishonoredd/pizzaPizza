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
        <div>
            name = {props.item.name}
            price = {props.item.price}
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}
