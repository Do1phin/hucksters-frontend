export const customThunk = (store) => {
    return (next) => {
        return (action) => {
            // console.log('customThunk -> action ' , action);
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            }
            return next(action);
        };
    };
};
