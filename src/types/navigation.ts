export interface INavigationSubLink {
  id: string;
  label: string;
  path: string;
}

export interface INavigationLink {
  id: string;
  label: string;
  links: INavigationSubLink[];
}

