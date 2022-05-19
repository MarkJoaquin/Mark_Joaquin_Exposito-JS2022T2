const datos = [{
id: 1,
title: 'Iron Man',
year: 2008
},{
id: 2,
title: 'Spider Man',
year: 2001
},{
id: 3,
title: 'Avengers: Endgame',
year: 2015
}];

//const datos = [];

const getDatos = () => {
return new Promise((resolve, reject) => {
if(datos.lenght === 0){
reject(new Error("no existen datos"));
}

```
setTimeout(()=>{
  resolve(datos);
}, 1000);

```

});
}

//getDatos()
// .then((datos) => console.log(datos));

async function fetchingData(){
try{
const datosFetched = await getDatos();
console.log(datosFetched);
}catch (err){
console.log(err.message);
}
}
fetchingData();