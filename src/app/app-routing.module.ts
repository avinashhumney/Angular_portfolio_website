import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Static pages

import { HomepageComponent } from '../Portfolio/user/homepage/homepage.component';
import { SidebarComponent } from '../Portfolio/common/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
