import type { GlobalTypes } from "@/types"

export interface IMenuItem extends GlobalTypes.ILink {}

export const MENU: IMenuItem[] = [
  {
    title: "Главная",
    to: "/",
  },
  {
    title: "О нас",
    to: "/about",
  },
  {
    title: "Новости",
    to: "/news",
  },
  {
    title: "Обучение",
    to: "/learning",
  },
  {
    title: "Финансы",
    to: "/finance",
  },
  {
    title: "Конкурсы",
    to: "/competition",
  },
]
