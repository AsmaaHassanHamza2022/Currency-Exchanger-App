import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.Dev';

export const addAccesskeyInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.BaseUrl;
    // Add the base URL
    const apiReq = req.clone({
      url: `${baseUrl}${req.url}`
    });

    // Add query parameters
    const modifiedReq = apiReq.clone({
      setParams: {
        access_key: environment.APIsAccesskey, 
      }
    });

    return next(modifiedReq);

};
