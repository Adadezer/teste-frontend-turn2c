import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'teste-frontend-turn2c';

  public breeds: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  cheangeBreed(event: any) {
    console.log(event)

    // event.target.forEach((item) => {
    //   let item = {
    //     id: item.index,
    //     name: item.innerText,
    //     selected: item.selected
    //   }

    //   this.breeds.push(breed);
    // });

  }

}
