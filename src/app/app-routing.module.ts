import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import { RunningComponent } from './components/running/running.component';
import { CompletedComponent } from './components/completed/completed.component';
import { TorunComponent } from './components/torun/torun.component';
import { SuspendComponent } from './components/suspend/suspend.component';
import { DeleteComponent } from './components/delete/delete.component';
import { BlockComponent } from './components/block/block.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'main', component: MainComponent,
    children: [
      {path: 'running', component: RunningComponent},
      {path: 'completed', component: CompletedComponent},
      {path: 'torun', component: TorunComponent},
      {path: 'suspend', component: SuspendComponent},
      {path: 'delete', component: DeleteComponent},
      {path: 'block', component: BlockComponent},
      {path: 'error', component: ErrorComponent}
    ]
},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
