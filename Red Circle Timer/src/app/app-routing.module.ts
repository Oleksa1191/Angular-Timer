import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedCircleComponent } from './red-circle/red-circle.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'red-circle',
    pathMatch:'full'
  },
  {
    path:'red-circle',
    component:RedCircleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
