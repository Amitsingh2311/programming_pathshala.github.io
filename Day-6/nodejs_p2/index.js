var figlet = require("figlet");

figlet("AMIT RAJPUT", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});









// ASYNC  await
 async function getApi(){
    const pr = await fetch('https://api.github.com/users/deepak3440' );
     const data = await pr.json();
     console.log(data);
}
getApi();

 

