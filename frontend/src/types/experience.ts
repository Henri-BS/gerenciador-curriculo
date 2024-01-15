export type Experience = {
  id: number;
  jobTitle: string;
  company: string;
  workingDay: string;
  startDate: string;
  endDate: string;
  cvId: number;
};

export type ExperiencePage = {
  content?: Experience[];
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

export type ExperienceProps = {
  experience: Experience;
};
