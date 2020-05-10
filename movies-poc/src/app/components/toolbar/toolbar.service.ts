import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ToolbarItemModel } from './toolbaritem.model';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  itemWasClicked = new Subject<ToolbarItemModel>();
  constructor() { }
}
