export function updateUserRequest(data) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: data,
  };
}

export function updateUserSuccess(profile) {
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: {
      profile,
    },
  };
}

export function updateUserFailure() {
  return {
    type: '@user/UPDATE_FAILURE',
  };
}
