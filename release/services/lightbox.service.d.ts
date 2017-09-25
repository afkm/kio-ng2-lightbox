import { EventEmitter } from '@angular/core';
import { LightboxState } from '../enums/lightbox-state.enum';
import { LightboxItem } from '../interfaces/lightbox-item';
export declare class LightboxService {
    constructor();
    stateChanges: EventEmitter<LightboxState>;
    item: EventEmitter<LightboxItem>;
    displayNode(lightboxItem: LightboxItem): void;
    open(): void;
    close(): void;
}
