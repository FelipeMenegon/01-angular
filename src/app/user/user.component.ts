import { Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;

  avatar = input<string>();
  name = input<string>();

  get imagePath () {
    return "assets/users/" + this.avatar;
  }

  onSelectUser(){}
}
