//your JS code here. If required.

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name');
  const number = document.getElementById('number');

  if (!name.value.trim() || !number.value.trim()) {
    alert("Please enter valid details.");
  } 
  new Promise((resolve,reject)=>{
       setTimeout(()=>{
            if(parseInt(number.value)>18){
                resolve(`Welcome, ${name.value}. You can vote.`);
            }
            else{
                reject(`Oh sorry ${name.value}. You aren't old enough.`);
            }
       },4000)
  }).then((message)=>
      alert(message)
  ).catch((message)=>
      alert(message)
  );
  

});

