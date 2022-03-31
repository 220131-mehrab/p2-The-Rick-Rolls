import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
//import { MessageService } from '../MessageService/message.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
