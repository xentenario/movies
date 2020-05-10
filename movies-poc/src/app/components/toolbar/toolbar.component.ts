import { Component, OnInit, Input, Output } from '@angular/core';
import { ToolbarItemModel } from './toolbaritem.model';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @Input() items: ToolbarItemModel[];
  constructor(private toolBarService: ToolbarService) {
  }

  ngOnInit(): void {
    this.items.map( (x: ToolbarItemModel) => x.isSelected = false );
    console.log(this.items);
  }

  onSelected(item: ToolbarItemModel){
    item.isSelected = !item.isSelected;
    this.toolBarService.itemWasClicked.next(item);
  }
}
