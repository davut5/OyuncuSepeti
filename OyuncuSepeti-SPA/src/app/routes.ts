import { MemberEditResolver } from './_resolves/member-edit.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListResolver } from './_resolves/member-list.resolver';
import { MemberDetailResolver } from './_resolves/member-detail.resolver';
import { AuthGuard } from './guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { PreventUnsavedChanges } from './guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
            {path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
            canDeactivate: [PreventUnsavedChanges]},
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];

