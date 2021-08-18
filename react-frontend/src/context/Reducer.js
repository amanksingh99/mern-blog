const LoginReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFeching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFeching: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFeching: false,
                error: true,
            };
        case "LOGOUT":
            return {
                user: null,
                isFeching: false,
                error: false,
            };
        default:
            return state;
    }
};

export default LoginReducer;
