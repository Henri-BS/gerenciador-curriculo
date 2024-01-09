export type Props = {
    id: string;
}

export type Cv = {
    id: number;
    name: string;
    description: string;
    image: string;
    phone: string;
    location: string;
    email: string;
}

export type CvPage = {
    content?: Cv[];
    size?: number;
    pageNumber?: number;
    numberOfElements?: number;
    totalElements?: number;
    totalPages?: number;
    number: number;
    empty?: boolean;
    first?: boolean;
    last?: boolean;
  };

  export type CvProps = {
    cv: Cv;
  }