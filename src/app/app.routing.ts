import {Routes,RouterModule} from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { ProdutoCategoriaComponent } from './produto-categoria/produto-categoria.component';

import { ProdutoComponent } from './produto/produto.component';
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    {path: 'produto/:id',component:ProdutoComponent},
    {path: 'produto/categoria/:id',component:ProdutoCategoriaComponent},
    {path: '',component:PrincipalComponent},
    {path: '**',component:PrincipalComponent},
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);