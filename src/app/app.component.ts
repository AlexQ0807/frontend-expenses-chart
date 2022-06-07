import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { IExpense } from './shared-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expenses-chart';

  private _jsonURL = './assets/data.json';
  expenseEvent: Observable<IExpense[]> = new Observable<IExpense[]>();

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.expenseEvent = this.http.get<IExpense[]>(this._jsonURL);
  }
}
