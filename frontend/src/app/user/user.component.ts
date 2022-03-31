import { Component, OnInit } from '@angular/core';
import { User } from '../user';
//import { MessageService } from '../MessageService/message.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'windstorm'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
