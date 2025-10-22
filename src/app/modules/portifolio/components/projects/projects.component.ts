import { Component, computed, inject, signal } from '@angular/core';
import { NgClass, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { IProjects } from '../../interface/IProjects.interface';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

interface CategorizedProject extends IProjects {
  categories: readonly string[];
}

const FEATURED_PROJECTS: readonly CategorizedProject[] = [
  {
    src: 'assets/img/projects/vfull.png',
    alt: 'Projeto Vida FullStack',
    title: 'Vida FullStack',
    width: 180,
    height: 92,
    description:
      '<p>Blog dedicado ao ecossistema Angular, abordando desde conceitos essenciais até arquiteturas modernas com Signals.</p>' +
      '<p>O projeto foi migrado para Angular 18, utiliza bibliotecas modernas e integra deploy automático.</p>',
    links: [
      {
        name: 'Visitar',
        href: 'https://vidafullstack.com.br',
      },
    ] as const,
    categories: ['conteúdo', 'frontend'],
  },
  {
    src: 'assets/img/projects/vfull.png',
    alt: 'Dashboard analítica em Angular',
    title: 'Dashboards Zoneless',
    width: 180,
    height: 92,
    description:
      '<p>Aplicação de analytics que explora o modo zoneless do Angular 18 utilizando Signals e RxJS interop.</p>' +
      '<p>Inclui carregamento diferido com @defer e rotas com transições suaves.</p>',
    links: [
      {
        name: 'Código no GitHub',
        href: 'https://github.com/chrmartins/angular-dashboards',
      },
    ] as const,
    categories: ['frontend', 'componentização'],
  },
  {
    src: 'assets/img/projects/vfull.png',
    alt: 'Design System Angular',
    title: 'Design System Signals',
    width: 180,
    height: 92,
    description:
      '<p>Biblioteca de componentes reutilizáveis construída com Angular Material 18 e API de Signals.</p>' +
      '<p>Oferece temas dinâmicos, componentes acessíveis e documentação interativa.</p>',
    links: [
      {
        name: 'Storybook',
        href: 'https://design-system.chr3web.com.br',
      },
    ] as const,
    categories: ['componentização'],
  },
  {
    src: 'assets/img/projects/vfull.png',
    alt: 'E-commerce headless',
    title: 'E-commerce Headless',
    width: 180,
    height: 92,
    description:
      '<p>Loja virtual headless integrando Angular 18 com APIs REST e pagamentos.</p>' +
      '<p>Utiliza Progressive Image Loading, recursos de acessibilidade e hidratação inteligente.</p>',
    links: [
      {
        name: 'Demonstração',
        href: 'https://ecommerce.chr3web.com.br',
      },
    ] as const,
    categories: ['frontend', 'fullstack'],
  },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule, NgOptimizedImage, NgClass, TitleCasePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly #dialog = inject(MatDialog);

  readonly #allProjects = signal<readonly CategorizedProject[]>(FEATURED_PROJECTS);

  readonly selectedCategory = signal('todos');

  readonly categories = computed(() => {
    const unique = new Set<string>(['todos']);
    this.#allProjects().forEach((project) => project.categories.forEach((category) => unique.add(category)));
    return Array.from(unique);
  });

  readonly visibleProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'todos') {
      return this.#allProjects();
    }

    return this.#allProjects().filter((project) => project.categories.includes(category));
  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  isCategorySelected(category: string) {
    return this.selectedCategory() === category;
  }

  openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
      position: {
        top: '-45%',
        left: '10%',
      },
    });
  }
}
