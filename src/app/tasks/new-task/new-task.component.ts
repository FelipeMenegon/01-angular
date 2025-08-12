import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  insertTitle = '';
  insertSummary = '';
  insertDate = '';

  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.add.emit({
      title: this.insertTitle,
      summary: this.insertSummary,
      date: this.insertDate,
    });
  }
}
