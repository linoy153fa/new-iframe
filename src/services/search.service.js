import {utilService} from '../services/util.service'

export const searchService = {
    query,
}


const items=[
  {id:utilService.makeId(),title:'כיסא',description:'blue,new,great',price:120+'$'},
  {id:utilService.makeId(),title:'מיטה',description:'blue,new,great',price:120+'$'},
  {id:utilService.makeId(),title:'ארון',description:'blue,new,great',price:120+'$'},
  {id:utilService.makeId(),title:'מיטה',description:'blue,new,great',price:120+'$'},
  {id:utilService.makeId(),title:'שולחן',description:'blue,new,great',price:120+'$'},
  {id:utilService.makeId(),title:'מיטה',description:'blue,new,great',price:120+'$'},
  {id:utilService.makeId(),title:'מראה',description:'blue,new,great',price:120+'$'},
  {id:utilService.makeId(),title:'מיטה',description:'blue,new,great',price:120+'$'}
  
    ]
    
function query() {
  return items
}
  


