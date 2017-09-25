import { OnChanges, SimpleChanges } from '@angular/core';
import { KioContentModel, KioFragmentModel } from 'kio-ng2-data';
import { ViewParams } from 'kio-ng2-component-routing';
export declare class LightboxItemComponent implements OnChanges {
    constructor();
    imageNode: KioContentModel;
    textNode: KioContentModel;
    metaNode: KioContentModel;
    contentNode: KioFragmentModel;
    viewParams: ViewParams;
    ngOnChanges(changes: SimpleChanges): void;
    private _updateContentNode();
}
