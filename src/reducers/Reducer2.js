export default (state = null ,action) => {
    switch(action.type){
      case 'select_action':
          return action.payload;
      default:
          return state;
    }
}