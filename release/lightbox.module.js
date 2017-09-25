import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule.forRoot = function () {
        return {
            ngModule: MainModule,
            providers: []
        };
    };
    MainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    //declarations: [],
                    //providers: [ ],
                    //entryComponents: [],
                    exports: [CommonModule]
                },] },
    ];
    /** @nocollapse */
    MainModule.ctorParameters = function () { return []; };
    return MainModule;
}());
export { MainModule };
//# sourceMappingURL=lightbox.module.js.map