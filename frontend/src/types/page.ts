import { Cv } from "./cv";
import { Education } from "./education";
import { Experience } from "./experience";
import { Item, Section } from "./section";

export type Page = {
    content?: Cv[] | Education[] | Experience[] | Section[] | Item[];
    last?: boolean;
    totalElements?: number;
    totalPages?: number;
    size?: number;
    number: number;
    first?: boolean;
    numberOfElements?: number;
    empty?: boolean;
    pageNumber?: number;
  };

  export type Props = {
    id: string;
  }