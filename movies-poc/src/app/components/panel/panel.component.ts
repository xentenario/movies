import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass'],
})
export class PanelComponent implements OnInit {
  @Input() data: MovieModel;
  ngOnInit(): void {
    console.log(this.data);
  }
}
