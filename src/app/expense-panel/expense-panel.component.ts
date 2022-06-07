import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IExpense } from '../shared-interfaces';

@Component({
  selector: 'app-expense-panel',
  templateUrl: './expense-panel.component.html',
  styleUrls: ['./expense-panel.component.css']
})
export class ExpensePanelComponent implements OnInit {

  @Input() expenseEvent = new Observable<IExpense[]>();
  expenseData: IExpense[] = [];

  maxHeight = 300;

  constructor() { }

  ngOnInit(): void {
    this.expenseEvent.subscribe(data => {
      this.expenseData = data;
      
      const expenseTotal:number = this.expenseData.reduce((s, o) => s += o.amount, 0);

      console.log(expenseTotal);

      this.expenseData.forEach((o) => {
        o['barSize'] = Math.round((o.amount*this.maxHeight)/expenseTotal) + "%";
        o['hide'] = true;
      });

      console.log(this.expenseData);
    });
  }


  mouseOverEvent(index:number){
    this.expenseData[index].hide = false;
  }

  mouseOutEvent(index:number){
    this.expenseData[index].hide = true;
  }

}
