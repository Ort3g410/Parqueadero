import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  responseTable:any
  displayedColumnsTable!: string[];
  titleTabla!: string;
  dataSource:any 
}

