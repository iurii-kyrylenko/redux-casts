const activeBook = (state = {}, action) => {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
};

export default activeBook