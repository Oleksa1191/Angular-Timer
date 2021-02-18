import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplisticTimerComponent } from './simplistic-timer/simplistic-timer.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'simplistic-timer',
    pathMatch:'full'
  },
  {
    path:'simplistic-timer',
    component:SimplisticTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
