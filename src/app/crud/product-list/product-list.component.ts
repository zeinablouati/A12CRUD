import {Component, OnInit} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {CRUDService} from "../services/crud.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  // Row Data: The data to be displayed.
  rowData= [
    { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
    { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
    { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true }
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" }
  ];
  constructor(private crudService: CRUDService) {
  }
  ngOnInit() {
  }
}
