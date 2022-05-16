import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import { TokenResolverService } from './resolver/token-resolver.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: ContentComponent,
        resolve: {
            access: TokenResolverService
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        resolve: {
            access: TokenResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }