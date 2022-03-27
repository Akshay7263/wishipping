let today = new Date();
let d1 = today.getDate();
let m1 = today.getMonth() + 1;
let y1 = today.getFullYear();


function isLeap(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    return false;
}



let y = y1, m = m1, d = d1;
let count, BeforeOrAfter;

let i = 0;
document.querySelector('#submit1').addEventListener('click', () => {

    count = parseInt(document.querySelector("#count").value);
    BeforeOrAfter = document.querySelector("#BeforeOrAfter").value;
    let TimeVal = document.querySelector("#TimeVal");

    if (count) {
       
        if (BeforeOrAfter == "before") {
            count = -count;
            console.log(count);
        }

        switch (TimeVal.value) {

            case 'year':
                y = y1 + count;
                break;
            case 'month':
                let now3 = new Date();
                now3.setMonth(now3.getMonth()+count);
                d = now3.getDate();
                m = now3.getMonth()+1 ;
                y = now3.getFullYear();
                break;
            case 'week':
                let now = new Date();
                now.setDate(now.getDate() + (count * 7));
                d = now.getDate();
                m = now.getMonth() + 1;
                y = now.getFullYear();
                break;
            case 'days':

                let now1 = new Date();
                now1.setDate(now1.getDate() + count);
                d = now1.getDate();
                m = now1.getMonth() + 1;
                y = now1.getFullYear();

                break;

        }
    } else {
        alert("input is blank");
    }

 

    document.querySelector("#info").innerHTML = `<h6 class="alert alert-success">${[d, m, y].join(" - ")}</h6>` 


})


document.querySelector('#submit').addEventListener('click', () => {
    if(document.querySelector("#d1").value && document.querySelector("#d2").value ){
    i = 1;
    // cal days
  
    let date1 = new Date(document.querySelector("#d1").value);
    let date2 = new Date(document.querySelector("#d2").value);
     

    let days = Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));
    document.querySelector("#d3").innerHTML = `<h6 class="alert alert-success">number of days ${days}<h6>`;

    //cal year month and days

    let m2 = date1.getMonth();
    i = m2;
    let c = 0, z = 0;
    let y2 = date1.getFullYear();
    let y3 = date2.getFullYear();
    let numy = 0, numm = 0, numd = 0, rday;

    while (y2 != y3) {
        if (isLeap(y2)) {
            c++;
            y2 = y2 + 1;

        } else {
            y2 = y2 + 1;
            z++;
        }

    }


    let avg = ((c * 366) + (z * 365)) / (c + z);
    let avg2;
    if(isLeap(y2)){
      avg2 = 366/12;
    }else{
        avg2 = 365/12;
    }


    let days2 = days;
    if (days2 > 365) {

        numy = Math.floor(days2 / avg);
        rday = Math.round(days2 % avg);
        avg2 = avg/12;

    } else {
        rday = days2;
    }
    if(days2 >27){
       
        numm = Math.floor(rday /avg2);
        rday = Math.floor(rday % avg2);
    }
    if(days == 28 && date1.getMonth()==1 && date1.getDate()==1){
        if(!isLeap(date1.getFullYear())){ 
            numm=1;
            rday=0;
        }else{
            rday=28;
        }
    }
    if(days == 29 && date1.getMonth()==1 && date1.getDate()==1){
        if(isLeap(date1.getFullYear())){
           numm=1;
           rday=0;

        }
    }
    
    numd = rday;


    document.querySelector("#d4").innerHTML =  `<table class="table table-hover">
  <thead>
    <tr>
     
      <th scope="col">Day</th>
      <th scope="col">Month</th>
      <th scope="col">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> ${numd}</td>
      <td>${numm}</td>
      <td>${numy} </td>
    </tr>
    </tbody>
    </table>`
}else{
    alert("please give input");
}
})






















































































// 1, 1970