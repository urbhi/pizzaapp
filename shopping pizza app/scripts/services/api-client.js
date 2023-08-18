//network call code

export default async function makenetworkcall(){
    try
    {
        const url = 'https://gist.githubusercontent.com/Dhruvgarg91/ff8347e5fded74a0d4578eeabf1a2f2b/raw/05694902f615a8d63a4506e968e992c6acd55bba/Pizza.json';
        
        const response =await fetch (url);//block
    const object =await response.json();//block
    console.log('object is',object);
    return object;// wrap promise
}
catch(err){
    //console.log('Some problem in api call',err);
    throw err;
}
    /*const promise = fetch(url);//assign to thread
    promise.then(function(response){
      const promise2=response.json();//desrialization (json to object)
      promise2.then(data=>console.log('data is',data))
      .catch(e =>console.log('JSON parse error',e))
    }).catch(function(err){
        console.log(console.error())

    });
    console.log('Good bye');*/
    
}
