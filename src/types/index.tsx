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
  image: any;
  date: string;
  text: string;
  type: string;
}

export interface ICaseCard{
  id:string,
  image:string,
  title:string,
  description:string,
  navigatePath: string
}

export interface imagesData{
  id:string,
  image:string
}
