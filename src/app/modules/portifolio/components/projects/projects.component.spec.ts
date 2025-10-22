import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [{ provide: MatDialog, useValue: dialogSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose categories including default "todos" option', () => {
    const categories = component.categories();
    expect(categories[0]).toBe('todos');
    expect(categories.length).toBeGreaterThan(1);
  });

  it('should filter projects when a category is selected', () => {
    component.selectCategory('componentização');
    const filtered = component.visibleProjects();

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((project) => project.description.includes('Angular'))).toBeTrue();
  });

  it('should open the dialog with the selected project', () => {
    const project = component.visibleProjects()[0];

    component.openDialog(project);

    expect(dialogSpy.open).toHaveBeenCalled();
  });
});
