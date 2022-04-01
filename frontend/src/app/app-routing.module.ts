import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInterfaceComponent } from './user-interface/user-interface.component';


const routes: Routes = [
  { path: 'user', component: UserInterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }