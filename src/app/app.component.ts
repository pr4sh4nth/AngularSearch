import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  sithLords: {name: string, description: string, icon: string, img: string, selected: boolean}[] = [];
  query: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<{name: string, description: string, icon: string, img: string, selected: boolean}[]>('../assets/data.json').subscribe(data => {
      this.sithLords = data
    })
    
  }

  handleSelected(sithLordSelected: {name: string, description: string, icon: string, img: string, selected: boolean}) {
    this.query = ''
    
    this.sithLords.forEach(sith => {
      if(sith === sithLordSelected) {
        sith.selected = true
      } else {
        sith.selected = false
      }
    })
  }

}
