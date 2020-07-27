import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) , data: { title: '主页'}},
            { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule), data: { title: '表单'} },
            { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule), data: { title: '表格'} },
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
