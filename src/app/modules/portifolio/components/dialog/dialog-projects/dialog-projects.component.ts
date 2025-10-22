import { Component, computed, inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss',
})
export class DialogProjectsComponent {
  readonly #dialogRef = inject(MatDialogRef<DialogProjectsComponent>);
  readonly #data = inject<IProjects>(MAT_DIALOG_DATA);

  readonly project = signal<IProjects>(this.#data);
  readonly hasLinks = computed(() => (this.project().links?.length ?? 0) > 0);

  closeModal() {
    return this.#dialogRef.close();
  }
}
