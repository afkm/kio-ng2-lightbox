import { Injectable, EventEmitter } from '@angular/core';
import { LightboxState } from '../enums/lightbox-state.enum';
var LightboxService = /** @class */ (function () {
    function LightboxService() {
        this.stateChanges = new EventEmitter();
        this.item = new EventEmitter();
        window.lbService = this;
    }
    LightboxService.prototype.displayNode = function (lightboxItem) {
        this.stateChanges.emit(LightboxState.open);
        this.item.emit(lightboxItem);
    };
    LightboxService.prototype.open = function () {
        this.stateChanges.emit(LightboxState.open);
    };
    LightboxService.prototype.close = function () {
        this.stateChanges.emit(LightboxState.closed);
    };
    LightboxService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LightboxService.ctorParameters = function () { return []; };
    return LightboxService;
}());
export { LightboxService };
//# sourceMappingURL=lightbox.service.js.map