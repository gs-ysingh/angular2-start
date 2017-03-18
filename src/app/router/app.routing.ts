/**
 * Created by YSingh on 06/03/17.
 */

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "../components/user.component";
import { AboutComponent } from "../components/about.component";

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
    path: 'product/:id', component: ProductDetails,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: Overview },
      { path: 'specs', component: Specs }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
