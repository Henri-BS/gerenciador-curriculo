export type Section = {
    id: number;
    title: string;
    cvId: number;
}

export type SectionPage = {
    content?: Section[];
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

  export type SectionProps = {
    section: Section;
  }

  export type Item = {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    sectionId: number;
}

export type ItemPage = {
    content?: Item[];
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

  export type ItemProps = {
    item: Item;
  }