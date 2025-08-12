import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  insertTitle = '';
  insertSummary = '';
  insertDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.insertTitle,
        summary: this.insertSummary,
        date: this.insertDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
