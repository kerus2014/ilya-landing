export interface ClassName {
  className?: string;
}

export type NavLinkValue =
  | "Главная"
  | "Моя история"
  | "Проекты"
  | "Кейсы"
  | "Блог"
  | "Сотрудничество"
  | "Контакты";

export interface INavbarData {
  id: number;
  value: NavLinkValue;
  handler: (value: NavLinkValue) => void;
}
