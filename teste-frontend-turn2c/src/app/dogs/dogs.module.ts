import { NgModule } from "@angular/core";
import { DogsComponent } from "./containers/dogs/dogs.component";
import { DogsListComponent } from "./components/dogs-list.component";
import { CommonModule } from "@angular/common";
import { AppMaterialModule } from "src/app/shared/app-material.module";



@NgModule({
  declarations: [DogsComponent, DogsListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [DogsComponent],
})
export class DogsModule {}
