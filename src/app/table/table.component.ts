import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableInfoInterface } from '../interfaces/table-info-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tables: TableInfoInterface[] = [];
  @Output() newTableEmmiter = new EventEmitter<TableInfoInterface[]>();
  @Output() deleteTableEmmiter = new EventEmitter<number>();

  tableRow: TableInfoInterface[] = [];
  modalDisplay: boolean = false;

  tableCopies: TableInfoInterface[] = [];

  constructor() { }

  ngOnInit(): void {}

  openModal (): void {
    this.modalDisplay = true;
  }

  copyTable (): void {
    this.newTableEmmiter.emit(this.tableRow);
  }
  deleteTable (tableIndex: number): void {
    this.deleteTableEmmiter.emit(tableIndex);
  }

  deleteTableRow (cellIndex: number): TableInfoInterface[] {
    return this.tableRow.splice(cellIndex, 1);
  }

  editTableRow (singeCell: Object): void {
    this.modalDisplay = true;
  }

  recieveTableCellInfo (tableRowToAdd: any): void {
    this.tableRow.push(tableRowToAdd);
  }
}
