import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sith-lord-list',
  templateUrl: './sith-lord-list.component.html',
})
export class SithLordListComponent implements OnInit {
  @Input() sithLords: {name: string, description: string, icon: string, selected: boolean}[] = []
  @Input() query = ''

  selectedSithLord: object = {};
  constructor() { }

  ngOnInit(): void {
  }
  handleClick(item: any) {
    this.selectedSithLord = item;
    item.selected = !item.selected;

  }
}
