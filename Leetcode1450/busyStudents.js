var busyStudent = function(startTime, endTime, queryTime) {
  let busyStudents=0;
    for(let i=0;i<endTime.length;i++){
    if( startTime[i] <= queryTime && queryTime <= endTime[i]){
            busyStudents++
        }
}

return busyStudents;
    
};