import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePassed'
})
export class DatePassedPipe implements PipeTransform {

  transform(value: any): string {
    let date = new Date();
    let inputDateString = value.substring(0, value.indexOf('T')).split('-');
    let inputDate: any = new Date(inputDateString[0], inputDateString[1]-1, inputDateString[2]);
    // Get dates without times
    let todayWithNoTime: any = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    // Get date difference in seconds
    let dateDifference = (todayWithNoTime - inputDate) * 0.001;
    let dateCount = '';

    if(dateDifference <= 59) {
      dateCount = `seconds ago`;
    } else if (dateDifference >= 60 && dateDifference < 3600){
      if(Math.floor(dateDifference/60) === 1){
        dateCount = `${Math.floor(dateDifference/60)} minute ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/60)} minutes ago`;
      }
    } else if (dateDifference >= 3600 && dateDifference < 86400){
      if(Math.floor(dateDifference/3600) === 1){
        dateCount = `${Math.floor(dateDifference/3600)} hour ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/3600)} hours ago`;
      }
    } else if (dateDifference >= 86400 && dateDifference < 604800){
      if(Math.floor(dateDifference/86400) === 1){
        dateCount = `${Math.floor(dateDifference/86400)} day ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/86400)} days ago`;
      }
    } else if (dateDifference >= 604800 && dateDifference < 2629743){
      if(Math.floor(dateDifference/604800) === 1){
        dateCount = `${Math.floor(dateDifference/604800)} week ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/604800)} weeks ago`;
      }
    } else if (dateDifference >= 2629743 && dateDifference < 31556926){
      if(Math.floor(dateDifference/2629743) === 1){
        dateCount = `${Math.floor(dateDifference/2629743)} month ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/2629743)} months ago`;
      }
    } else {
      if(Math.floor(dateDifference/31556926) === 1){
        dateCount = `${Math.floor(dateDifference/31556926)} year ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/31556926)} years ago`;
      }
    }
    return dateCount;
  }

}