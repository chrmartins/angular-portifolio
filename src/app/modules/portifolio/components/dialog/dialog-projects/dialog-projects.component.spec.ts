import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogProjectsComponent } from './dialog-projects.component';
import { IProjects } from '../../../interface/IProjects.interface';

describe('DialogProjectsComponent', () => {
  let component: DialogProjectsComponent;
  let fixture: ComponentFixture<DialogProjectsComponent>;
  const projectMock: IProjects = {
    src: 'assets/img/projects/vfull.png',
    alt: 'Mock project',
    title: 'Mock project',
    width: 100,
    height: 50,
    description: '<p>Descrição mock.</p>',
    links: [
      { name: 'Mock', href: 'https://example.com' },
    ] as const,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProjectsComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: projectMock },
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the project data provided by the dialog', () => {
    expect(component.project()).toEqual(projectMock);
  });
});
