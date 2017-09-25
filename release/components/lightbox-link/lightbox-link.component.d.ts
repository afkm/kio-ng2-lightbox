import { AfterViewInit, ElementRef, TemplateRef } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service';
import { ViewParams } from 'kio-ng2-component-routing';
import { KioContentModel, KioFragmentModel } from 'kio-ng2-data';
export declare class LightboxLinkComponent implements AfterViewInit {
    protected lightboxService: LightboxService;
    protected el: ElementRef;
    constructor(lightboxService: LightboxService, el: ElementRef);
    node: KioContentModel | KioFragmentModel;
    componentName: string;
    viewParams: ViewParams;
    disabled: boolean;
    template: TemplateRef<any>;
    onClick(event: Event): void;
    protected openLightboxWithNode(node: KioContentModel | KioFragmentModel): void;
    protected openLightboxWithNode(node: KioContentModel | KioFragmentModel, textNode: KioContentModel): void;
    protected openLightboxWithNode(node: KioContentModel | KioFragmentModel, textNode: KioContentModel, metaNode: KioContentModel): void;
    protected findParentLightboxElement(): void;
    ngAfterViewInit(): void;
}
