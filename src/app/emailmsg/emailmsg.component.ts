import { Component, OnInit } from '@angular/core';
import { MinValidator } from '@angular/forms';

@Component({
  selector: 'app-emailmsg',
  templateUrl: './emailmsg.component.html',
  styleUrls: ['./emailmsg.component.css']
})
export class EmailmsgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
mailc(mailid:String)
{


    window.location.href = "mailto:selvendhiranindru@gmail.com+?subject=Query&body=Hi this is "+mailid+"and i would like to know more about your website";
}
}
