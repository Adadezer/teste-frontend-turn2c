import { Component, Input } from '@angular/core';
import { IDogs } from '../containers/dogs/interfaces/IDogs';
// import { IDogs } from 'src/app/dogs/containers/dogs/interface/IDogs';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent {
  @Input() dogs: IDogs[] = [];
}
