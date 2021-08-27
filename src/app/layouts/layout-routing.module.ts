import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutFooterComponent } from "./layout-footer-only/layout-footer.component";
import { LayoutComponent } from "./layout/layout.component";

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
                path: 'products', loadChildren: () => import('../pages/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'products/:id', loadChildren: () => import('../pages/product-details/product-details.module').then(m => m.ProductDetailsModule)
            },
            {
                path: 'cart', loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartModule)
            },
            {
                path: 'cart/finish', loadChildren: () => import('../pages/order-result/order-result.module').then(m => m.OrderResultModule)
            }
        ]
    },
    {
        path: '',
        component: LayoutFooterComponent,
        children: [
            {
                path: 'home', loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'form', loadChildren: () => import('../pages/form/form.module').then(m => m.FormModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }