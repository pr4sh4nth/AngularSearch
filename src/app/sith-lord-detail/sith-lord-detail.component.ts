import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sith-lord-detail',
  templateUrl: './sith-lord-detail.component.html',
  
})
export class SithLordDetailComponent implements OnInit {
  @Input() sithLord: any;
  constructor() { }

  ngOnInit(): void {
  }

}
