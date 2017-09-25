import { Component, Optional, HostBinding, Inject, Input, AfterViewInit, ElementRef, OnDestroy, TemplateRef, ContentChild, ViewEncapsulation } from '@angular/core';
import { LightboxService } from '../../services/lightbox.service'
import { ViewParams } from 'kio-ng2-component-routing'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

const findDOMUp = ( element:HTMLElement, matcher:{(el:HTMLElement):boolean} ):HTMLElement => {
  if ( !element ) {
    return undefined
  } else if ( matcher(element) === true ) {
    return element
  } else if ( /(html|body)/i.test(element.tagName) ) {
    return undefined
  }
  return findDOMUp ( element.parentElement, matcher )
}

@Component({
  selector: 'lightbox-link',
  templateUrl: './lightbox-link.component.html',
  styleUrls: ['./lightbox-link.component.css']
})
export class LightboxLinkComponent implements AfterViewInit {

  constructor(
      @Optional() @Inject(LightboxService) protected lightboxService:LightboxService,
      @Inject(ElementRef) protected el:ElementRef
    ) { 

  }

  @Input('node') node:KioContentModel|KioFragmentModel
  @Input('componentName') componentName:string
  @Input('viewParams') viewParams:ViewParams

  public disabled:boolean=false

  @ContentChild(TemplateRef) template:TemplateRef<any>

  public onClick ( event:Event ) {
    this.openLightboxWithNode(this.node)
  }

  protected openLightboxWithNode ( node:KioContentModel|KioFragmentModel ):void 
  protected openLightboxWithNode ( node:KioContentModel|KioFragmentModel, textNode:KioContentModel ):void 
  protected openLightboxWithNode ( node:KioContentModel|KioFragmentModel, textNode:KioContentModel, metaNode:KioContentModel ):void 
  protected openLightboxWithNode ( node:KioContentModel|KioFragmentModel, textNode?:KioContentModel, metaNode?:KioContentModel ):void 
  {
    let imageNode:KioContentModel
    
    if ( node instanceof KioFragmentModel ) {
      imageNode = node.children.find ( (child:KioContentModel) => child.type === 'src' )
      const textNodes:KioContentModel[] = node.children.filter ( (child:KioContentModel) => child.type === 'txt' )
      return this.openLightboxWithNode ( imageNode, textNodes[0], textNodes[1] )
    } else {
      imageNode = node
    }

    this.lightboxService.displayNode ( {
      lightboxImageNode: imageNode,
      lightboxTextNode: textNode,
      lightboxMetaNode: metaNode
    } )

  }

  protected findParentLightboxElement () {
    //console.log('lightbox link', this.el.nativeElement )
    let element:HTMLElement = this.el.nativeElement
    const lightboxOutlet = findDOMUp ( element, ( el:HTMLElement ):boolean => {
      return el.tagName.toLowerCase() === 'lightbox-outlet'
    } )
    this.disabled = !!lightboxOutlet
    if ( this.disabled ) {
      Object.assign(this.el.nativeElement.style,{
        height: '100%',
        display: 'flex'
      })
    }
  }


  ngAfterViewInit () {
    process.nextTick(()=>this.findParentLightboxElement())
  }


}
