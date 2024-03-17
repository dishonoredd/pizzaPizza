import { Window } from "./components/Window";
import { useState } from "react";

import "./App.css";

const array = [
  [
    {
      name: "Свинина",
      price: 99,
      img: "./src/img/free-icon-sausages-3082035.png",
    },
    {
      name: "Бекон",
      price: 99,
      img: "./src/img/free-icon-bacon-4036928.png",
    },
    {
      name: "Говядина",
      price: 99,
      img: "./src/img/free-icon-sausage-1812029.png",
    },
    {
      name: "Пепперони",
      price: 99,
      img: "./src/img/free-icon-pepperoni-2718144.png",
    },
    {
      name: "Креветки",
      price: 99,
      img: "./src/img/free-icon-shrimp-7592677.png",
    },
    {
      name: "Курица",
      price: 99,
      img: "./src/img/free-icon-turkey-13114458.png",
    },
    {
      name: "Баранина",
      price: 99,
      img: "./src/img/free-icon-steak-12240751.png",
    },
  ],
  [
    {
      name: "Пармезан",
      price: 89,
      img: "./src/img/free-icon-cheese-517561.png",
    },
    {
      name: "Моцарелла",
      price: 89,
      img: "./src/img/free-icon-mozzarella-4976737.png",
    },
    {
      name: "Чедер",
      price: 89,
      img: "./src/img/free-icon-cheese-836583.png",
    },
    {
      name: "Итальянские сыры",
      price: 89,
      img: "./src/img/free-icon-cheese-slice-7522575.png",
    },
    {
      name: "сыр с плесенью",
      price: 89,
      img: "./src/img/free-icon-feta-6476192.png",
    },
  ],
  [
    {
      name: "Чеснок",
      price: 69,
      img: "./src/img/free-icon-clove-garlic-1759062.png",
    },
    { name: "Лук", price: 69, img: "./src/img/free-icon-onion-5194898.png" },
    {
      name: "Томаты",
      price: 69,
      img: "./src/img/free-icon-fruit-15314519.png",
    },
    {
      name: "Халапеньо",
      price: 69,
      img: "./src/img/free-icon-jalapeno-2718748.png",
    },
    {
      name: "Шпинат",
      price: 69,
      img: "./src/img/free-icon-spinach-3944281.png",
    },
    {
      name: "Сладкий перец",
      price: 69,
      img: "./src/img/free-icon-bell-pepper-4802811.png",
    },
  ],
];

function App() {
  return (
    <div className="wrapper">
      <Window array={array} />
    </div>
  );
}

export default App;
