import { Injectable, EventEmitter } from '@angular/core';
import { LightboxState } from '../enums/lightbox-state.enum'
import { KioFragmentModel, KioContentModel } from 'kio-ng2-data'
import { LightboxItem } from '../interfaces/lightbox-item'
import { ViewParams } from 'kio-ng2-component-routing'


@Injectable()
export class LightboxService {

  constructor() { 
    (<any>window).lbService = this
  }

  public stateChanges:EventEmitter<LightboxState>=new EventEmitter()

  public item:EventEmitter<LightboxItem>=new EventEmitter()

  public displayNode ( lightboxItem:LightboxItem ) {
    
    this.stateChanges.emit(LightboxState.open)    
    this.item.emit(lightboxItem)

  }
  
  public open () {
    this.stateChanges.emit(LightboxState.open)
  }
  
  public close () {
    this.stateChanges.emit(LightboxState.closed)
  }

}
