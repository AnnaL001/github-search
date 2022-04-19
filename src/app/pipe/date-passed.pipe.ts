import { Pipe, PipeTransform } from '@angular/core';
import { Seconds } from '../enum/seconds';

@Pipe({
  name: 'datePassed'
})
export class DatePassedPipe implements PipeTransform {

  transform(value: any): string {
    let date = new Date();
    // Transform value type from string to Date
    let inputDateString = value.substring(0, value.indexOf('T')).split('-');

    // Get dates without times
    let todayWithNoTime: any = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let inputDate: any = new Date(inputDateString[0], inputDateString[1]-1, inputDateString[2]);
    // Get date difference in seconds
    let dateDifference = (todayWithNoTime - inputDate) * 0.001;
    let dateCount = '';

    if(dateDifference < Seconds.MIN) {
      dateCount = `seconds ago`;
    } else if (dateDifference >= Seconds.MIN && dateDifference < Seconds.HOUR){
      if(Math.floor(dateDifference / Seconds.MIN) === 1){
        dateCount = `${Math.floor(dateDifference / Seconds.MIN)} minute ago`;
      } else {
        dateCount = `${Math.floor(dateDifference / Seconds.MIN)} minutes ago`;
      }
    } else if (dateDifference >= Seconds.HOUR && dateDifference < Seconds.DAY){
      if(Math.floor(dateDifference / Seconds.HOUR) === 1){
        dateCount = `${Math.floor(dateDifference / Seconds.HOUR)} hour ago`;
      } else {
        dateCount = `${Math.floor(dateDifference / Seconds.HOUR)} hours ago`;
      }
    } else if (dateDifference >= Seconds.DAY && dateDifference < Seconds.WEEK){
      if(Math.floor(dateDifference/Seconds.DAY) === 1){
        dateCount = `${Math.floor(dateDifference / Seconds.DAY)} day ago`;
      } else {
        dateCount = `${Math.floor(dateDifference / Seconds.DAY)} days ago`;
      }
    } else if (dateDifference >= Seconds.WEEK && dateDifference < Seconds.MONTH){
      if(Math.floor(dateDifference / Seconds.WEEK) === 1){
        dateCount = `${Math.floor(dateDifference / Seconds.WEEK)} week ago`;
      } else {
        dateCount = `${Math.floor(dateDifference / Seconds.WEEK)} weeks ago`;
      }
    } else if (dateDifference >= Seconds.MONTH && dateDifference < Seconds.YEAR){
      if(Math.floor(dateDifference / Seconds.MONTH) === 1){
        dateCount = `${Math.floor(dateDifference / Seconds.MONTH)} month ago`;
      } else {
        dateCount = `${Math.floor(dateDifference / Seconds.MONTH)} months ago`;
      }
    } else {
      if(Math.floor(dateDifference / Seconds.YEAR) === 1){
        dateCount = `${Math.floor(dateDifference / Seconds.YEAR)} year ago`;
      } else {
        dateCount = `${Math.floor(dateDifference / Seconds.YEAR)} years ago`;
      }
    }
    return dateCount;
  }

}
