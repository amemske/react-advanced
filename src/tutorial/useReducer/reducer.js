export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      ModalContent: 'Item added',
    };
  }
  if (action.type === 'NO_ITEM') {
    return {
      ...state,
      isModalOpen: true,
      ModalContent: 'Please add a name',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
    };
  }
  throw new Error('no matching action types');
};
