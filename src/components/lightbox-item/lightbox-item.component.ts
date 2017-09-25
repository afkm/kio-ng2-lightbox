import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'
import { ViewParams } from 'kio-ng2-component-routing'

import * as cuid from 'cuid'

@Component({
  selector: 'lightbox-item',
  templateUrl: './lightbox-item.component.html',
  styleUrls: ['./lightbox-item.component.css']
})
export class LightboxItemComponent implements OnChanges {

  constructor() { }

  @Input() imageNode:KioContentModel
  @Input() textNode:KioContentModel
  @Input() metaNode:KioContentModel

  contentNode:KioFragmentModel
  viewParams:ViewParams

  ngOnChanges ( changes:SimpleChanges ) {
    
    const dataChanged:boolean = ( 'imageNode' in changes ) 
      || ( 'textNode' in changes )
      || ( 'metaNode' in changes )

    const hasImage:boolean = !!(this.imageNode || (changes['imageNode'] && changes['imageNode'].currentValue ))
    
    if ( dataChanged && hasImage ) {
      process.nextTick ( () => {
        this._updateContentNode()
      } )
    }
  }

  private _updateContentNode ( ) {
    this.contentNode = new KioFragmentModel ( {
      type: 'fragment',
      cuid: cuid(),
      children: [
        this.imageNode, this.textNode, this.metaNode
      ].filter ( (node:KioContentModel) => !!node )
    } )
    const ratio:number = this.imageNode.header('ratio')

    this.viewParams = {
      fixedHeight: true,
      fixedWidth: true,
      fitStrategy: 'clip',
      bouncing: false
    }
  }

}


