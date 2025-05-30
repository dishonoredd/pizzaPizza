import { uuid } from "./lib";
import meetImg1 from "/src/img/free-icon-sausages-3082035.png";
import meetImg2 from "/src/img/free-icon-bacon-4036928.png";
import meetImg3 from "/src/img/free-icon-sausage-1812029.png";
import meetImg4 from "/src/img/free-icon-pepperoni-2718144.png";
import meetImg5 from "/src/img/free-icon-shrimp-7592677.png";
import meetImg6 from "/src/img/free-icon-turkey-13114458.png";
import meetImg7 from "/src/img/free-icon-steak-12240751.png";
import cheaseImg1 from "/src/img/free-icon-cheese-517561.png";
import cheaseImg2 from "/src/img/free-icon-cheese-slice-7522575.png";
import cheaseImg3 from "/src/img/free-icon-mozzarella-4976737.png";
import cheaseImg4 from "/src/img/free-icon-cheese-836583.png";
import cheaseImg5 from "/src/img/free-icon-feta-6476192.png";
import addImg1 from "/src/img/free-icon-clove-garlic-1759062.png";
import addImg2 from "/src/img/free-icon-onion-5194898.png";
import addImg3 from "/src/img/free-icon-fruit-15314519.png";
import addImg4 from "/src/img/free-icon-jalapeno-2718748.png";
import addImg5 from "/src/img/free-icon-spinach-3944281.png";
import addImg6 from "/src/img/free-icon-bell-pepper-4802811.png";

export type Good = {
  name: string;
  price: number;
  img: string;
  id: string;
};

const array = [
  [
    {
      name: "Свинина",
      price: 99,
      img: meetImg1,
    },

    {
      name: "Бекон",
      price: 99,
      img: meetImg2,
    },
    {
      name: "Говядина",
      price: 99,
      img: meetImg3,
    },
    {
      name: "Пепперони",
      price: 99,
      img: meetImg4,
    },
    {
      name: "Креветки",
      price: 99,
      img: meetImg5,
    },
    {
      name: "Курица",
      price: 99,
      img: meetImg6,
    },
    {
      name: "Баранина",
      price: 99,
      img: meetImg7,
    },
  ],
  [
    {
      name: "Пармезан",
      price: 89,
      img: cheaseImg1,
    },
    {
      name: "Маасдам",
      price: 89,
      img: cheaseImg2,
    },
    {
      name: "Моцарелла",
      price: 89,
      img: cheaseImg3,
    },

    {
      name: "Чедер",
      price: 89,
      img: cheaseImg4,
    },

    {
      name: "сыр с плесенью",
      price: 89,
      img: cheaseImg5,
    },
  ],
  [
    {
      name: "Чеснок",
      price: 69,
      img: addImg1,
    },
    { name: "Лук", price: 69, img: addImg2 },
    {
      name: "Томаты",
      price: 69,
      img: addImg3,
    },
    {
      name: "Халапеньо",
      price: 69,
      img: addImg4,
    },
    {
      name: "Шпинат",
      price: 69,
      img: addImg5,
    },
    {
      name: "Перец",
      price: 69,
      img: addImg6,
    },
  ],
] as Good[][];

export const goods: Good[][] = array.map((tab) =>
  tab.map((good) => {
    good.id = uuid();
    return good;
  })
);
