import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { WelcomeComponent } from './welcome/welcome.component'; // Import the new component

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'inventory', component: InventoryDashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirects to Login as the default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
