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
    this.resetSelection(null);
    console.log(this.items);
  }

  onSelected(item: ToolbarItemModel): void{
    item.isSelected = !item.isSelected;
    this.resetSelection(item);
    this.toolBarService.itemWasClicked.next(item);
  }

  resetSelection(item: ToolbarItemModel): void{
    this.items.map( (x: ToolbarItemModel) => {
       if ( item == null || x.label !== item.label ) {
         x.isSelected = false;
        }
    });
  }
}
