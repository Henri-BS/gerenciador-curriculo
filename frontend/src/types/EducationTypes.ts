export type Education = {
    id: number;
    course: string;
    institution: string;
    status: string;
    academicDegree: string;
    startDate: string;
    endDate: string;
    cvId: number;
}

export type EducationPage = {
    content?: Education[];
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

  export type EducationProps = {
    education: Education;
  }