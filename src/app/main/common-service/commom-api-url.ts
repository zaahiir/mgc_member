export class BaseAPIUrl {

  localUrl: string = "https://mastergolfclub.com/apis/"
  stagingUrl: string = "https://mastergolfclub.com/apis/"
  productionUrl: string = "https://mastergolfclub.com/apis/";
  constructor() { }

  getUrl(urlType: number) {
    if (urlType == 1) {
      return this.localUrl
    } else if (urlType == 2) {
      return this.stagingUrl
    } else {
      return this.productionUrl
    }
  }
}

export const baseURLType: number = 1
