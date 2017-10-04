export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(friend => friend.id !== action.id)}
    default:
      return state
  }
}

// return {friends: state.friends.filter(friend => )}
// return { friends: {...state, action.friend}}
