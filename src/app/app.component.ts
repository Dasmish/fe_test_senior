import { Component, OnInit } from '@angular/core';
import { TableInfoInterface } from './interfaces/table-info-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular_fe_test';
  tables: TableInfoInterface[] = [];

  ngOnInit(): void {
    this.tables.push({
      name: '',
      surname: '',
      age: 0,
      city: ''
    });
  }

  recieveNewTableEntity (table: any): void {
    this.tables.push(table);
  }

  recieveAndDeleteTableEntity (tableIndexToRemove: number): void {
    this.tables.splice(tableIndexToRemove, 1);
  }

}
