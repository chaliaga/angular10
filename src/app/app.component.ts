import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { MenuItem } from 'primeng/api';
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
                    { label: 'Menu Material', icon: 'pi pi-eye', routerLink: ['/app-material'] },
                    { label: 'See Post', icon: 'pi pi-eye', routerLink: ['/app-post'] },
                    { label: 'See All', icon: 'pi pi-eye', routerLink: ['/app-menu'] },
                    { label: 'Quit' }
                ]
            }
        ];
    }

    ngOnDestroy() {
        return onAuthUIStateChange;
    }

    totalDishes(): string {
        return this.menuService.cart ? this.menuService.cart.length.toString() : '0';
    }
}
