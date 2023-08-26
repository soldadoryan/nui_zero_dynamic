import { RiPlayFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { GiBandit } from "react-icons/gi";

export default [
  {
    title: "Casal",
    icon: <AiOutlineHeart />,
    type: "category",
    value: "couple",
    category: "interactions",
  },
  {
    title: "Ilegal",
    icon: <GiBandit />,
    type: "category",
    value: "ilegal",
    category: "interactions",
  },
  {
    title: "Enviar dinheiro",
    icon: <RiPlayFill />,
    type: "action",
    action: "enviar",
    closeLater: true,
    category: "interactions",
  },
  {
    title: "Colocar capuz",
    icon: <RiPlayFill />,
    type: "action",
    action: "capuz",
    value: "colocar",
    closeLater: true,
    category: "ilegal",
  },
  {
    title: "Retirar capuz",
    icon: <RiPlayFill />,
    type: "action",
    action: "capuz",
    closeLater: true,
    category: "ilegal",
  },
];
