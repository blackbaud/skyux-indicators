import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertVisualComponent } from './visual/alert/alert-visual.component';

import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    component: VisualComponent
  },
  {
    path: 'visual/alert',
    component: AlertVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
