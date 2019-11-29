const showRegistrationOverlay = (state) => {
    return { ...state, registrationOverlay: { visible: true } };
};


const hideRegistrationOverlay = (state) => {
    return { ...state, registrationOverlay: { visible: false } };
};


export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'showRegistrationOverlay':
            return showRegistrationOverlay(state);
        case 'hideRegistrationOverlay':
            return hideRegistrationOverlay(state);
        default:
            return state;
    }
};
