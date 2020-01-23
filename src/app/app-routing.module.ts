import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarnButtonComponent } from './warn-button/warn-button.component';


const routes: Routes = [
  { path: '', component: WarnButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
