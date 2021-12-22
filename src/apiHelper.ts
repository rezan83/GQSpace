import {Inews} from './interfaces';

export const getData= async ()=>{

  let data:Promise<Inews[]> = await fetch('news50.json'
  ,{

    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
    .then(response => response.json())
    .catch(error => [])

   return data
}