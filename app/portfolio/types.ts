export interface Project {
  id: number;

  client: string;
  menuname: string;
  category: string;
  title: string;

  role: string;

  industry: string;

  duration: string;

  status: string;

  businessChallenge: string[];

  solution: string[];

  //responsibilities: string[];

  businessOutcomes: string[];

  //technologies: string[];

  //architectureHighlights: string[];

  architectureImage: string;
}