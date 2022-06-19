import { Component, OnInit } from '@angular/core';
import { CalendarChinese } from 'date-chinese';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  calendarChinese = new CalendarChinese()
  chineseDate: CalendarChinese;

  ngOnInit() {
    this.chineseDate = this.calendarChinese.fromDate(new Date());
    
  }
}