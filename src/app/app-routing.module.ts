import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudaComponent } from './components/ajuda/ajuda.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';


const routes: Routes = [{
  path: '',
  component: NavComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'ajuda',
      component: AjudaComponent
    },
    {
      path: 'forms',
      component: FormsComponent
    }
  ]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
