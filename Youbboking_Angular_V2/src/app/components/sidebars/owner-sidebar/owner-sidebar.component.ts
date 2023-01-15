import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-sidebar',
  templateUrl: './owner-sidebar.component.html',
  styleUrls: ['./owner-sidebar.component.css']
})
export class OwnerSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  private _statUserName="";
  @Input()
  get statUserName(): string{
    return this._statUserName;
  }
  set statUserName(statUserName:string){
    this._statUserName = statUserName === undefined ? "" : statUserName;
  }

}
