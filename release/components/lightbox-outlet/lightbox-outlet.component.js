import { Component, ViewChild, ViewChildren, Inject, ViewEncapsulation } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service';
import { LightboxState } from '../../enums/lightbox-state.enum';
var LightboxOutletComponent = /** @class */ (function () {
    function LightboxOutletComponent(lightboxService) {
        var _this = this;
        this.lightboxService = lightboxService;
        this.supportsObjectFit = document.createElement("detect").style['objectFit'] === "";
        this.lightboxState = LightboxState.closed;
        this._lightboxStateSubscription = this.lightboxService.stateChanges
            .distinctUntilChanged()
            .subscribe(function (lightboxState) {
            _this.lightboxState = lightboxState;
            if (lightboxState === LightboxState.closed) {
                _this.item = null;
            }
        });
        this._lightboxGroupSubscription = this.lightboxService.item.delay(1)
            .subscribe(function (item) {
            _this.item = item;
        });
    }
    LightboxOutletComponent.prototype.ngOnDestroy = function () {
        this._lightboxStateSubscription.unsubscribe();
    };
    LightboxOutletComponent.prototype.close = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.lightboxService.close();
    };
    LightboxOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lightbox-outlet',
                    templateUrl: './lightbox-outlet.component.html',
                    styleUrls: ['./lightbox-outlet.component.css'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    LightboxOutletComponent.ctorParameters = function () { return [
        { type: LightboxService, decorators: [{ type: Inject, args: [LightboxService,] },] },
    ]; };
    LightboxOutletComponent.propDecorators = {
        'contentElement': [{ type: ViewChild, args: ['content',] },],
        'itemElements': [{ type: ViewChildren, args: ['lightboxItem',] },],
    };
    return LightboxOutletComponent;
}());
export { LightboxOutletComponent };
//# sourceMappingURL=lightbox-outlet.component.js.map