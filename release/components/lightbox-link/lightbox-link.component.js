import { Component, Optional, Inject, Input, ElementRef, TemplateRef, ContentChild } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service';
import { KioFragmentModel } from 'kio-ng2-data';
var findDOMUp = function (element, matcher) {
    if (!element) {
        return undefined;
    }
    else if (matcher(element) === true) {
        return element;
    }
    else if (/(html|body)/i.test(element.tagName)) {
        return undefined;
    }
    return findDOMUp(element.parentElement, matcher);
};
var LightboxLinkComponent = /** @class */ (function () {
    function LightboxLinkComponent(lightboxService, el) {
        this.lightboxService = lightboxService;
        this.el = el;
        this.disabled = false;
    }
    LightboxLinkComponent.prototype.onClick = function (event) {
        this.openLightboxWithNode(this.node);
    };
    LightboxLinkComponent.prototype.openLightboxWithNode = function (node, textNode, metaNode) {
        var imageNode;
        if (node instanceof KioFragmentModel) {
            imageNode = node.children.find(function (child) { return child.type === 'src'; });
            var textNodes = node.children.filter(function (child) { return child.type === 'txt'; });
            return this.openLightboxWithNode(imageNode, textNodes[0], textNodes[1]);
        }
        else {
            imageNode = node;
        }
        this.lightboxService.displayNode({
            lightboxImageNode: imageNode,
            lightboxTextNode: textNode,
            lightboxMetaNode: metaNode
        });
    };
    LightboxLinkComponent.prototype.findParentLightboxElement = function () {
        //console.log('lightbox link', this.el.nativeElement )
        var element = this.el.nativeElement;
        var lightboxOutlet = findDOMUp(element, function (el) {
            return el.tagName.toLowerCase() === 'lightbox-outlet';
        });
        this.disabled = !!lightboxOutlet;
        if (this.disabled) {
            Object.assign(this.el.nativeElement.style, {
                height: '100%',
                display: 'flex'
            });
        }
    };
    LightboxLinkComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        process.nextTick(function () { return _this.findParentLightboxElement(); });
    };
    LightboxLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lightbox-link',
                    templateUrl: './lightbox-link.component.html',
                    styleUrls: ['./lightbox-link.component.css']
                },] },
    ];
    /** @nocollapse */
    LightboxLinkComponent.ctorParameters = function () { return [
        { type: LightboxService, decorators: [{ type: Optional }, { type: Inject, args: [LightboxService,] },] },
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
    ]; };
    LightboxLinkComponent.propDecorators = {
        'node': [{ type: Input, args: ['node',] },],
        'componentName': [{ type: Input, args: ['componentName',] },],
        'viewParams': [{ type: Input, args: ['viewParams',] },],
        'template': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return LightboxLinkComponent;
}());
export { LightboxLinkComponent };
//# sourceMappingURL=lightbox-link.component.js.map