import { Directive, Inject } from '@angular/core';
import { LightboxService } from '../services/lightbox.service';
var LightboxDirective = /** @class */ (function () {
    function LightboxDirective(lightboxService) {
        this.lightboxService = lightboxService;
        console.log('hello image');
    }
    LightboxDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lightbox]'
                },] },
    ];
    /** @nocollapse */
    LightboxDirective.ctorParameters = function () { return [
        { type: LightboxService, decorators: [{ type: Inject, args: [LightboxService,] },] },
    ]; };
    return LightboxDirective;
}());
export { LightboxDirective };
//# sourceMappingURL=lightbox.directive.js.map