import { MENU } from "@/components/app/app-header/support"
import type { GlobalTypes } from "@/types"
import type { IULinkProps } from "@c/ui/u-link/support"

export interface IMenuItem extends GlobalTypes.ILink {
  type: IULinkProps["type"]
}

export interface IMenu {
  title: string
  data: IMenuItem[]
}

// constants

export const SECTIONS_LIST: IMenu = {
  title: "Разделы",
  data: MENU.map((item) => ({ type: "link", ...item })),
}

export const CONTACTS_LIST: IMenu = {
  title: "Контакты",
  data: [
    {
      type: "a",
      title: "+7(999) 999-99-99",
      to: "tel:+79999999999",
    },
  ],
}

export const CALL_LIST: IMenu = {
  title: "Заказать звонок",
  data: [
    {
      type: "a",
      title: "mail@mail.ru",
      to: "mailto:mail@mail.ru",
    },
  ],
}
