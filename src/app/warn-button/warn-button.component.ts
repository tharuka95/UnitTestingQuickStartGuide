import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { WarnService } from './warn.service';

@Component({
  selector: 'app-warn-button',
  templateUrl: './warn-button.component.html',
  styleUrls: ['./warn-button.component.scss']
})
export class WarnButtonComponent implements OnInit {

  content     = 'you have been warned';
  hideContent = true;
  severity    = 423;
  errmsg: string;
  userlist = [];

  constructor(private warn: WarnService) { }

  ngOnInit() {
    this.warn.getUserList().subscribe(
      (res) => {
        this.userlist = res.data;
      },
      (err) => {
        this.errmsg = 'Error while loading User List';
      }
    );
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle();
    });
  }

  getText() {
    this.warn.getTextwarn("Test");
  }
}
