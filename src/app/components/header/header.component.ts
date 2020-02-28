import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'NG SimpleAuth';
  tasks: string = 'Tasks';
  private: string = 'Private';
  signin: string =   'SignIn';
  signup: string = 'SignUp';
  constructor() { }

  ngOnInit(): void {
  }

}
