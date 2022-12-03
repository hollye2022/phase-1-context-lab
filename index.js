/* Your Code Here */

class EmployeeRecord{
    constructor(arr){
        this.firstName = arr[0];
        this.familyName = arr[1];
        this.title = arr[2];
        this.payPerHour = arr[3];
        this.timeInEvents = [];
        this.timeOutEvents = [];
    }
}

function createEmployeeRecord(arr) {

    const record = new EmployeeRecord(arr); 
    return record;

}

function createEmployeeRecords(arrs) {
    return arrs.map(arr => createEmployeeRecord(arr));
}

function createTimeInEvent(data){
    const newData = data.split(" ");
        const newRecord = {
            "type": "TimeIn",
            "hour":parseInt(newData[1]),
            "date": newData[0],
        }
        
      this.timeInEvents.push(newRecord);  
      
      return this;

} 

function createTimeOutEvent(data){
    const newData = data.split(" ");
        const newRecord = {
            "type": "TimeOut",
            "hour":parseInt(newData[1]),
            "date": newData[0],
        }
        
      this.timeOutEvents.push(newRecord);  
      
      return this;

} 

function hoursWorkedOnDate(data){
    const newArr = this.timeInEvents.filter((el) => el.date === data);
    const newArr2 = this.timeOutEvents.filter((el) => el.date === data);
    const timeIn = newArr[0].hour;
    const timeOut = newArr2[0].hour;
    const workedHours = (timeOut - timeIn)/100;
    return workedHours;

}

function wagesEarnedOnDate(data){
   const workedHours = hoursWorkedOnDate.call(this, data);
   const wagePerHour = this.payPerHour;
   const wages = workedHours * wagePerHour;
   return wages;

}

function findEmployeeByFirstName(arrs, firstName){

    return arrs.filter((record) => record.firstName === firstName)[0];

}

function calculatePayroll(arrs){
  const allWages = arrs.reduce((total, arr) => total += allWagesFor.call(arr), 0)
  return allWages;
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

