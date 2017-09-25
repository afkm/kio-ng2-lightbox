import { Component, Input } from '@angular/core';
import { KioFragmentModel } from 'kio-ng2-data';
import * as cuid from 'cuid';
var LightboxItemComponent = /** @class */ (function () {
    function LightboxItemComponent() {
    }
    LightboxItemComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var dataChanged = ('imageNode' in changes)
            || ('textNode' in changes)
            || ('metaNode' in changes);
        var hasImage = !!(this.imageNode || (changes['imageNode'] && changes['imageNode'].currentValue));
        if (dataChanged && hasImage) {
            process.nextTick(function () {
                _this._updateContentNode();
            });
        }
    };
    LightboxItemComponent.prototype._updateContentNode = function () {
        this.contentNode = new KioFragmentModel({
            type: 'fragment',
            cuid: cuid(),
            children: [
                this.imageNode, this.textNode, this.metaNode
            ].filter(function (node) { return !!node; })
        });
        var ratio = this.imageNode.header('ratio');
        this.viewParams = {
            fixedHeight: true,
            fixedWidth: true,
            fitStrategy: 'clip',
            bouncing: false
        };
    };
    LightboxItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lightbox-item',
                    templateUrl: './lightbox-item.component.html',
                    styleUrls: ['./lightbox-item.component.css']
                },] },
    ];
    /** @nocollapse */
    LightboxItemComponent.ctorParameters = function () { return []; };
    LightboxItemComponent.propDecorators = {
        'imageNode': [{ type: Input },],
        'textNode': [{ type: Input },],
        'metaNode': [{ type: Input },],
    };
    return LightboxItemComponent;
}());
export { LightboxItemComponent };
//# sourceMappingURL=lightbox-item.component.js.map