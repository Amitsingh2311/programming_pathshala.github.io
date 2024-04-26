function fetchAPI(){
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=7aff1171ec1daaf582ceea89cae9db04';
     fetch(url)
     .then((res)=>res.json())
         // .then(console.log);  
         .then((val)=>{
             renderUI(val)
         });  
 }
 fetchAPI()
 
 const root=document.getElementById("root")
 
 function renderUI(data){
     // console.log(data);
     const days=data.days;
     // console.log(days)
 
     const row=document.createElement('tr');
     //make heading row
     cell=document.createElement('th');
     cell1.innerText='Date';
     row.append(cell);
 
      cell=document.createElement('th');
     cell.innerText='Maximum Temperature';
     row.append(cell);
 
      cell=document.createElement('th');
     cell.innerText='Minimum Temperature';
     row.append(cell);
 
    cell=document.createElement("th")
    cell.innerText="Average Temparature"
    row.append(cell);
 
     root.append(row);
 
    //for table body
     for(let i=0;i<days.length;i++){
         const childRow=document.createElement('tr');
         const c1=document.createElement("td");
         c1.innerText=days[i].datetime;
         childRow.append(c1);
 
         const c2=document.createElement("td");
         c2.innerText=days[i].tempmax;
         childRow.append(c2);
 
         const c3=document.createElement("td");
         c3.innerText=days[i].tempmin;
         childRow.append(c3);
 
         const c4=document.createElement("td")
         c4.innerText=days[i].temp
         childrow.append(c4)  
 
         root.append(childRow);
 
     }
 }
 
 //fetch 2nd API
 function fetchAPI2(){
     const url='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline//2022-07-15/2022-07-20?unitGroup=metric&key=KFJEQJD4XY5K8FR6FX4LJ8NUV'
     fetch(url)
     .then((Response)=>{
            return Response.json()
 
     }).then((val)=>{
         console.log(val)
         rendertable2(val)
     })
 }
 const root1=document.getElementById("root1");
 
 function rendertable2(data){
    const row=document.createElement("tr")
    const cell=document.createElement("th")
    cell.innerText='date'
    row.append(cell);
 
 
     cell=document.createElement("th")
    cell.innerText='maxtemp'
    row.append(cell)
 
 
     cell=document.createElement("th")
    cell.innerText='min---temp'
    row.append(cell)
 
    cell=document.createElement("th")
    cell.innerText='average'
    row.append(cell)
 
    root1.append(row)
 
    //body of table -2
 
     row=document.createElement("tr")
     cell=document.createElement("td")
    cell.innerText='date'
    row.append(cell);
 
 
     cell=document.createElement("td")
    cell.innerText='maxtemp'
    row.append(cell)
 
 
     cell=document.createElement("td")
    cell.innerText='min---temp'
    row.append(cell)
 
    cell=document.createElement("td")
    cell.innerText='average'
    row.append(cell)
 
    root1.append(row)
 
 
 }
 
 
 
 
 renderUI();