import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '@lenne.tech/ng-base';
import { TaskService } from 'src/app/modules/core/services/task.service';
import { DialogService } from '../../../../modules/core/services/dialog.service';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { SectionService } from 'src/app/modules/core/services/section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(`${400}ms ease-in`)),
      transition('true => false', animate(`${400}ms ease-out`)),
    ]),
  ],
})
export class TaskComponent implements OnInit {
  @Input() hint?: string;
  @Input() videoReference?: string;
  @Input() solutionLink?: string;
  @Input() id: string;
  @Input() section: string;
  @Input() image: { url: string; alt: string };

  completed = false;

  constructor(
    private dialogService: DialogService,
    private taskService: TaskService,
    private storageService: StorageService,
    private sectionService: SectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sections = this.storageService.load('sections');

    if (sections) {
      sections.forEach((element) => {
        if (element[this.section]) {
          const sectionTasks = element[this.section];
          if (sectionTasks) {
            sectionTasks.forEach((tasks) => {
              if (tasks[this.id]?.completed) {
                this.completed = true;
              }
            });
          }
        }
      });
    }
  }

  onComplete(): void {
    if (!this.completed) {
      this.taskService.completeTask(this.id, this.section);
      if (this.sectionService.checkMileStone()) {
        this.openMileStone();
      }
    } else {
      this.taskService.uncompleteTask(this.id, this.section);
    }
    this.completed = !this.completed;
  }

  openHelp(): void {
    this.dialogService.openHelperDialog('Hilfe', this.hint, this.videoReference, this.solutionLink);
  }

  openMileStone(): void {
    this.sectionService.setCurrentMileStone(this.section);
    setTimeout(() => {
      this.router.navigate([`/lernpfad/meilenstein/${this.section}`]);
    }, 800);
  }
}
