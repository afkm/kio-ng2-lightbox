import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'
import { ViewParams } from 'kio-ng2-component-routing'

export interface ViewParamsProvider {
  viewParamsForNode ( contentNode:KioContentModel|KioFragmentModel, componentName?:string ):ViewParams 
}