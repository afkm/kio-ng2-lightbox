import { QueryList, ElementRef, OnDestroy } from '@angular/core';
import { KioFragmentModel, KioContentModel } from 'kio-ng2-data';
import { LightboxService } from '../../services/lightbox.service';
import { LightboxState } from '../../enums/lightbox-state.enum';
import { LightboxItem } from '../../interfaces/lightbox-item';
export declare class LightboxOutletComponent implements OnDestroy {
    protected lightboxService: LightboxService;
    supportsObjectFit: boolean;
    constructor(lightboxService: LightboxService);
    lightboxState: LightboxState;
    contentNodes: (KioFragmentModel | KioContentModel)[];
    item: LightboxItem;
    contentElement: ElementRef;
    itemElements: QueryList<ElementRef>;
    ngOnDestroy(): void;
    close(event: Event): void;
    private _lightboxStateSubscription;
    private _lightboxGroupSubscription;
}
