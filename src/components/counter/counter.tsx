import css from "/src/components/counter/counter.module.css";
import minusImg from "/src/img/free-icon-minus-2550003.png";
import plusImg from "/src/img/free-icon-plus-2549959.png";

type CounterProps = {
  onChange: (count: number) => void;
  value: number;
  min?: number;
  max?: number;
};

export function Counter(props: CounterProps) {
  const { onChange, max = 100, min = 0, value } = props;

  const plusClass = [css.plusminus];
  const minusClass = [css.plusminus];
  if (value >= max) plusClass.push(css.disabled);
  if (value <= min) minusClass.push(css.disabled);

  return (
    <>
      <button
        className={minusClass.join(" ")}
        onClick={() => {
          if (value > min) {
            onChange(value - 1);
          }
        }}
      >
        <img src={minusImg} />
      </button>
      <p className={css.item__green} style={{ color: "rgb(185, 0, 0)" }}>
        {value}
      </p>
      <button
        className={plusClass.join(" ")}
        onClick={() => {
          if (value < max) {
            onChange(value + 1);
          }
        }}
      >
        plusImg
        <img src={plusImg} alt="" />
      </button>
    </>
  );
}
