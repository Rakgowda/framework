export async function getAPI(URL){
    debugger

    let res = await fetch(URL);
    let data =  res.json()
    return data;
    
}