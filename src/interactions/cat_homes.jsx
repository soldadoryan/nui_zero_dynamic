import { RiPlayFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";

export default [
  {
    title: "Upgrades",
    icon: <RxUpdate />,
    type: "category",
    action: "updates",
    value: "update",
    category: "homes",
  },
  {
    title: "Minha residência",
    icon: <FaHouseUser />,
    type: "category",
    action: "myHomes",
    value: "house",
    category: "homes",
  },
  {
    title: "Interior",
    icon: <BsFillHouseGearFill />,
    type: "category",
    action: "interior",
    value: "interior",
    category: "update",
  },
  {
    title: "Decoração",
    icon: <BsFillHouseGearFill />,
    type: "category",
    action: "decoration",
    value: "decoration",
    category: "update",
  },
  {
    title: "Aumentar baú",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesBau",
    value: null,
    category: "update",
  },
  {
    title: "Adicionar garagem",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesGaragem",
    value: null,
    category: "update",
  },
  {
    title: "Pagar IPTU",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesTax",
    category: "house",
  },
  {
    title: "Lista de casas",
    icon: <RiPlayFill />,
    type: "action",
    action: "blips",
    category: "homes",
    side: "client",
  },
  {
    title: "Lacrar residência",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesLacrar",
    category: "homes",
  },
  {
    title: "Checar moradores",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesChecar",
    category: "house",
  },
  {
    title: "Adicionar morador",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesAdd",
    category: "house",
  },
  {
    title: "Remover morador",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesRem",
    category: "house",
  },
  {
    title: "Trancar/Destrancar casa",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesTrancar",
    category: "house",
  },
  {
    title: "Transferir a residência",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesTrans",
    category: "house",
  },
  {
    title: "Vender a residência",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesVender",
    category: "house",
  },
  {
    title: "Minhas residências",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesOther",
    category: "house",
  },
  {
    title: "Interiores disponíveis",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    category: "interior",
    value: null,
  },
  {
    title: "Interior simples",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    value: "simple",
    category: "interior",
  },
  {
    title: "Interior solteiro",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    value: "single",
    category: "interior",
  },
  {
    title: "Interior motel",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    value: "motel",
    category: "interior",
  },
  {
    title: "Interior Luxo Branca",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    value: "high_01",
    category: "interior",
  },
  {
    title: "Interior Luxo Vinho",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    value: "high_02",
    category: "interior",
  },
  {
    title: "Interior Moderno Neutro",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    value: "apartment_01",
    category: "interior",
  },
  {
    title: "Interior Moderno Laranja",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    value: "apartment_02",
    category: "interior",
  },
  {
    title: "Interior Duplex",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesInterior",
    value: "eclip_penthouse",
    category: "interior",
  },
  {
    title: "Decorações disponíveis",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: null,
    category: "decoration",
  },
  {
    title: "Decoração branca",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: "white",
    category: "decoration",
  },
  {
    title: "Decoração executiva",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: "executive",
    category: "decoration",
  },
  {
    title: "Decoração colorida",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: "rainbow",
    category: "decoration",
  },
  {
    title: "Decoração ampla",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: "big",
    category: "decoration",
  },
  {
    title: "Decoração minimalista",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: "minimalist",
    category: "decoration",
  },
  {
    title: "Decoração romance",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: "red",
    category: "decoration",
  },
  {
    title: "Decoração lavanda",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: "purple",
    category: "decoration",
  },
  {
    title: "Decoração oceano",
    icon: <RiPlayFill />,
    type: "action",
    action: "homesDecoration",
    value: "ocean",
    category: "decoration",
  },
];