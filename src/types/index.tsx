export interface ClassName {
  className?: string;
}

export type NavLinkValueType =
  | "Главная"
  | "Моя история"
  | "Проекты"
  | "Кейсы"
  | "Блог"
  | "Сотрудничество"
  | "Контакты";

export interface INavbarData {
  id: number;
  value: NavLinkValueType;
  path:string;
}

interface ICard {
  image: any;
  title?: string;
  subtitle: string;
}

export interface IProjectCard extends ICard {
  text: string;
  firstLinkValue: string;
  firstLinkPath: string;
  secondLinkPath: string;
}

export interface ICooperationCard extends ICard {
  linkPath: string;
}

export interface IBlogCardData {
  id: number;
  image: any;
  date: string;
  text: string;
  type: string;
  path: string;
}

export interface ICaseCard {
  id: string;
  image: string;
  title: string;
  description: string;
  navigatePath: string;
}

export interface imagesData {
  id: string;
  image: string;
}

export interface InnerNavData {
  id: number;
  value: string;
  to: string;
}
