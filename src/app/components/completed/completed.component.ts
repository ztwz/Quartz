import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})



export class CompletedComponent implements OnInit {

  public datas: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const url  = 'http://localhost:63548/api/Task/GetTaskList';
    const that = this;
    this.http.get(url).subscribe(result => {
      if (result[0] != null) {
        this.datas = result;
      }
    });
  }

}
