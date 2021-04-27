const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case "REGISTER_USER":
        return {
            ...state,
        }
        default:
            return state;
    }
}
export default userReducer;