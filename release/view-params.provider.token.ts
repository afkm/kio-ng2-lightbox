import { InjectionToken } from '@angular/core'
import { ViewParamsProvider } from './interfaces/view-params.provider'

export let VIEW_PARAMS_PROVIDER:InjectionToken<ViewParamsProvider> = new InjectionToken<ViewParamsProvider>('view_params_provider')
