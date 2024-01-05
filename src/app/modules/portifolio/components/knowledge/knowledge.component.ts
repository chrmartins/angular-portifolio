import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de JavaScript'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS3'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento de React'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de NodeJS'
    },


  ])
}
