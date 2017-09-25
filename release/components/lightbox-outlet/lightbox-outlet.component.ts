import { Subscription } from 'rxjs/Subscription'
import {
  Component, ViewChild, ViewChildren, QueryList, ElementRef,
  EventEmitter,
  Inject,
  OnDestroy, AfterViewInit,
  ViewEncapsulation
} from '@angular/core';
import { KioFragmentModel, KioContentModel } from 'kio-ng2-data'

import { LightboxService } from '../../services/lightbox.service'
import { LightboxState } from '../../enums/lightbox-state.enum'
import { LightboxItem } from '../../interfaces/lightbox-item'
import { ViewParams } from 'kio-ng2-component-routing'


@Component({
  selector: 'lightbox-outlet',
  templateUrl: './lightbox-outlet.component.html',
  styleUrls: ['./lightbox-outlet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LightboxOutletComponent implements OnDestroy {

  supportsObjectFit:boolean = document.createElement("detect").style['objectFit'] === ""

  constructor(
    @Inject(LightboxService) protected lightboxService:LightboxService
  ) { }

  public lightboxState:LightboxState=LightboxState.closed
  public contentNodes:(KioFragmentModel|KioContentModel)[]
  public item:LightboxItem

  @ViewChild('content') contentElement:ElementRef
  @ViewChildren('lightboxItem') itemElements:QueryList<ElementRef>//=new QueryList<ElementRef>()

  ngOnDestroy () {
    this._lightboxStateSubscription.unsubscribe()
  }

  public close ( event:Event ) {
    event.preventDefault()
    event.stopPropagation()
    this.lightboxService.close ()
  }

  private _lightboxStateSubscription:Subscription=this.lightboxService.stateChanges
  .distinctUntilChanged()
  .subscribe ( (lightboxState:LightboxState) => {
    this.lightboxState = lightboxState
    if ( lightboxState === LightboxState.closed ) {
      this.item = null
    }
  } )

  private _lightboxGroupSubscription:Subscription=this.lightboxService.item.delay(1)
  .subscribe ( (item:LightboxItem) => {
    this.item = item
  } )




}
