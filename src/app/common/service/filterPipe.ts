import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[],key :string, filter: Object,key1:string,filter1:Object): any {
    if (!items || !(filter || filter1)) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => {
      if (filter && filter1){
        return item[key] === filter && item.country === filter1;
      }else {
        if (filter)
          return item[key] === filter;
        if (filter1)
          return item[key1] === filter1;
      }
    });
  }

  filterCompany(items: any[], args: string){
    if (!items || !args){
      return items;
    }
    return items.filter(item => {
      let tmp1 ;
      let tmp2 ;
      if (item.name) {
        tmp1 = item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1 || item.name.toUpperCase().indexOf(args.toUpperCase()) !== -1
      }
      if (item.shortName){
        tmp2 = item.shortName.toUpperCase().indexOf(args.toUpperCase()) !== -1 || item.shortName.toLowerCase().indexOf(args.toLowerCase()) !== -1
      }
      return tmp1 || tmp2
    });
  }

  filterProductIssuer(items: any[], args: any[]) {
    if (!items || !args){
      return items;
    }
    return items.filter(item => item.productOwner.code === args);
  }

  filterProduct(items: any[], option: any) {
    if (!items || option.country.length === 0 && option.code.length === 0){
      return items;
    }

    if (option.country.length === 0) {
      let array  = [];
      option.code.forEach(code=>{
        let tmp = items.filter(item => item.productOwner.code === code);
        if (array.length === 0) {
          array = tmp
        }else {
          array = array.concat(tmp)
        }
      });
      return array
    }
    if (option.code.length === 0) {
      let array  = [];
      option.country.forEach(country=>{
        let tmp = items.filter(item => item.countryCode === country);
        if (array.length === 0) {
          array = tmp
        }else {
          array = array.concat(tmp)
        }
      });
      return array
    }

    let array  = [];
    option.code.forEach(code=>{
      let tmp = items.filter(item => item.countryCode === option.country[0] && item.productOwner.code === code);
      if (array.length === 0) {
        array = tmp
      }else {
        array = array.concat(tmp)
      }
    });
    return array
  }
}
