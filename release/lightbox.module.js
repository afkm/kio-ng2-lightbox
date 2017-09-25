import { KioNg2ComponentRoutingModule } from 'kio-ng2-component-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxDirective } from './directives/lightbox.directive';
import { LightboxService } from './services/lightbox.service';
import { LightboxOutletComponent } from './components/lightbox-outlet/lightbox-outlet.component';
import { LightboxItemComponent } from './components/lightbox-item/lightbox-item.component';
import { LightboxLinkComponent } from './components/lightbox-link/lightbox-link.component';
export { LightboxService } from './services/lightbox.service';
export { LightboxDirective } from './directives/lightbox.directive';
import { KioNg2UIUXModule } from 'kio-ng2-uiux';
import { KioNg2ImageModule } from 'kio-ng2-image';
var LightboxModule = /** @class */ (function () {
    function LightboxModule() {
    }
    LightboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        KioNg2ComponentRoutingModule,
                        KioNg2UIUXModule,
                        KioNg2ImageModule
                    ],
                    providers: [LightboxService],
                    exports: [LightboxOutletComponent, LightboxItemComponent, LightboxLinkComponent],
                    declarations: [LightboxDirective, LightboxOutletComponent, LightboxItemComponent, LightboxLinkComponent],
                    entryComponents: [LightboxOutletComponent, LightboxItemComponent, LightboxLinkComponent]
                },] },
    ];
    /** @nocollapse */
    LightboxModule.ctorParameters = function () { return []; };
    return LightboxModule;
}());
export { LightboxModule };
//# sourceMappingURL=lightbox.module.js.map