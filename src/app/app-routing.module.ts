import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheMethodComponent } from './the method/the-method.component';

const routes: Routes = [{
  path: '',
  component: TheMethodComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
