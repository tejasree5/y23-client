export const loginUser = (credentials) => {
    return {
      type: 'LOGIN_USER',
      payload: credentials,
    };
  };
  