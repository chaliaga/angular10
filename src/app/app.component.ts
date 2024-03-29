import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthState, CognitoUserInterface, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { MenuItem, Message } from 'primeng/api';
import { slideInAnimation } from './route-animation';
import { MenuService } from './component/menu/menu.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit, OnDestroy {
    user: CognitoUserInterface | undefined;
    authState: AuthState;
    items: MenuItem[];
    message: Message[] = [];

    constructor(private ref: ChangeDetectorRef, public menuService: MenuService) {
    }

    ngOnInit(): void {
        onAuthUIStateChange((authState, authData) => {
            this.authState = authState;
            this.user = authData as CognitoUserInterface;
            // console.log(this.authState);
            // console.log(this.user);
            this.ref.detectChanges();
        });

        this.items = [
            {
                label: 'Menu',
                items: [
                    { label: 'Admin', icon: 'pi pi-cog', routerLink: ['/app-admin'] },
                    /*{ label: 'Menu Material', icon: 'pi pi-eye', routerLink: ['/app-material'] },
                    { label: 'See Post', icon: 'pi pi-eye', routerLink: ['/app-post'] },*/
                    { label: 'Platos Criollos', icon: 'pi pi-home', routerLink: ['/app-menu'],
                      queryParams: {category: 'Comida Criolla'} },
                    { label: 'Platos Marinos', icon: 'pi pi-filter', routerLink: ['/app-menu'],
                      queryParams: {category: 'Comida Marina'}},
                    { label: 'Quit' }
                ]
            }
        ];
    }

    ngOnDestroy(): any {
        return onAuthUIStateChange;
    }

    totalDishes(): number {
        return this.menuService.cart ? this.menuService.cart.length : 0;
    }
}
