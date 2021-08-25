import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'cart', loadChildren: () => import('../cart/cart.module').then(m => m.CartModule)
            },
            {
                path: 'form', loadChildren: () => import('../form/form.module').then(m => m.FormModule)
            },
            {
                path: 'products/:id', loadChildren: () => import('../product-details/product-details.module').then(m => m.ProductDetailsModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }