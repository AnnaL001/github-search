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
    // Seconds in different intervals
    const seconds = {
      min: 60,
      hour: 3600,
      day: 86400,
      week: 604800,
      month: 2629743,
      year: 31556926
    }
    let dateCount = '';

    if(dateDifference < seconds.min) {
      dateCount = `seconds ago`;
    } else if (dateDifference >= seconds.min && dateDifference < seconds.hour){
      if(Math.floor(dateDifference/seconds.min) === 1){
        dateCount = `${Math.floor(dateDifference/seconds.min)} minute ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/seconds.min)} minutes ago`;
      }
    } else if (dateDifference >= seconds.hour && dateDifference < seconds.day){
      if(Math.floor(dateDifference/seconds.hour) === 1){
        dateCount = `${Math.floor(dateDifference/seconds.hour)} hour ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/seconds.hour)} hours ago`;
      }
    } else if (dateDifference >= seconds.day && dateDifference < seconds.week){
      if(Math.floor(dateDifference/seconds.day) === 1){
        dateCount = `${Math.floor(dateDifference/seconds.day)} day ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/seconds.day)} days ago`;
      }
    } else if (dateDifference >= seconds.week && dateDifference < seconds.month){
      if(Math.floor(dateDifference/seconds.week) === 1){
        dateCount = `${Math.floor(dateDifference/seconds.week)} week ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/seconds.week)} weeks ago`;
      }
    } else if (dateDifference >= seconds.month && dateDifference < seconds.year){
      if(Math.floor(dateDifference/seconds.month) === 1){
        dateCount = `${Math.floor(dateDifference/seconds.month)} month ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/seconds.month)} months ago`;
      }
    } else {
      if(Math.floor(dateDifference/seconds.year) === 1){
        dateCount = `${Math.floor(dateDifference/seconds.year)} year ago`;
      } else {
        dateCount = `${Math.floor(dateDifference/seconds.year)} years ago`;
      }
    }
    return dateCount;
  }

}
