const changein=(state=[],action)=>{
    switch(action.type){
      case 'addin':
           return action.data ;
      default : return state;
      
    }
  }
export default changein