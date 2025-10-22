export interface ProjectLink {
  readonly name: string;
  readonly href: string;
}

export interface IProjects {
  readonly src: string;
  readonly alt: string;
  readonly title: string;
  readonly width: number;
  readonly height: number;
  readonly description: string;
  readonly links: readonly ProjectLink[];
}
