import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FliptimerComponent } from './fliptimer/fliptimer.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'flipTimer',
    pathMatch:'full'
  }
  ,{
    path:'flipTimer',
    component:FliptimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
