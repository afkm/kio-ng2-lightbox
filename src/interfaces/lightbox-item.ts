import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'
import { ViewParams } from 'kio-ng2-component-routing'

export interface LightboxItem {
  lightboxImageNode: KioContentModel
  lightboxTextNode?: KioContentModel
  lightboxMetaNode?: KioContentModel
  lightboxComponentName?: string
  lightboxViewParams?: ViewParams
}