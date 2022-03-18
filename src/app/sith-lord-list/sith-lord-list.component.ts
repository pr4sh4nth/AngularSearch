import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sith-lord-list',
  templateUrl: './sith-lord-list.component.html',
})
export class SithLordListComponent implements OnInit {
  @Input() sithLords: {name: string, description: string, icon: string, img: string, selected: boolean}[] = []
  @Input() query = ''
  @Output() sithLordSelected = new EventEmitter();

  selectedSithLord: any;
 
  constructor() { }

  ngOnInit(): void {
    this.selectedSithLord = null

  }
  handleClick(item: any) {
    this.selectedSithLord = item;
    item.selected = true;
    this.sithLordSelected.emit(item);
  }
  
}
