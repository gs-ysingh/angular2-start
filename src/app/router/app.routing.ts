/**
 * Created by YSingh on 06/03/17.
 */

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "../components/user.component";
import { AboutComponent } from "../components/about.component";
import { ProductComponent } from '../components/product.component';
import { OverviewComponent } from '../components/overview.component';
import { SpecsComponent } from '../components/specs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'product/:id', component: ProductComponent,
    children: [
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'specs', component: SpecsComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
