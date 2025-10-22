import { Component, signal } from '@angular/core';

interface ISkill {
  src: string;
  alt: string;
  name: string;
  level?: number;
}

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public getFrontendSkills(): ISkill[] {
    return [
      {
        src: 'assets/icons/knowledge/nextjs.svg',
        alt: 'Ícone de conhecimento de Next.js',
        name: 'Next.js',
        level: 95,
      },
      {
        src: 'assets/icons/knowledge/react.svg',
        alt: 'Ícone de conhecimento de React',
        name: 'React',
        level: 93,
      },
      {
        src: 'assets/icons/knowledge/angular.svg',
        alt: 'Ícone de conhecimento de Angular',
        name: 'Angular',
        level: 88,
      },
      {
        src: 'assets/icons/knowledge/typescript.svg',
        alt: 'Ícone de conhecimento de TypeScript',
        name: 'TypeScript',
        level: 92,
      },
      {
        src: 'assets/icons/knowledge/javascript.svg',
        alt: 'Ícone de conhecimento de JavaScript',
        name: 'JavaScript',
        level: 90,
      },
      {
        src: 'assets/icons/knowledge/tailwind.svg',
        alt: 'Ícone de conhecimento de Tailwind CSS',
        name: 'Tailwind CSS',
        level: 87,
      },
    ];
  }

  public getBackendSkills(): ISkill[] {
    return [
      {
        src: 'assets/icons/knowledge/spring-boot.svg',
        alt: 'Ícone de conhecimento de Spring Boot',
        name: 'Spring Boot',
        level: 90,
      },
      {
        src: 'assets/icons/knowledge/nodejs.svg',
        alt: 'Ícone de conhecimento de NodeJS',
        name: 'Node.js',
        level: 82,
      },
      {
        src: 'assets/icons/knowledge/postgresql.svg',
        alt: 'Ícone de conhecimento de PostgreSQL',
        name: 'PostgreSQL',
        level: 85,
      },
      {
        src: 'assets/icons/knowledge/docker.svg',
        alt: 'Ícone de conhecimento de Docker',
        name: 'Docker',
        level: 78,
      },
      {
        src: 'assets/icons/knowledge/aws.svg',
        alt: 'Ícone de conhecimento de AWS',
        name: 'AWS',
        level: 75,
      },
      {
        src: 'assets/icons/knowledge/git.svg',
        alt: 'Ícone de conhecimento de Git',
        name: 'Git',
        level: 88,
      },
    ];
  }

  // Manter compatibilidade com o código antigo
  public arrayKnowledge = signal<ISkill[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular',
      name: 'Angular 18',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de TypeScript',
      name: 'TypeScript',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de JavaScript',
      name: 'JavaScript',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
      name: 'HTML Semântico',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS3',
      name: 'CSS moderno',
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento de React',
      name: 'React & Next.js',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de NodeJS',
      name: 'Node.js',
    },
    {
      src: 'assets/icons/knowledge/tailwind.svg',
      alt: 'Ícone de conhecimento de Tailwind CSS',
      name: 'Tailwind & Design System',
    },
  ]);
}
