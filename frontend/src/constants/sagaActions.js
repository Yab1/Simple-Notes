const SagaActions = Object.freeze({
  // AUTH_WITH_GOOGLE = "auth/with-google",
  // LOG_OUT = "auth/log-out",
  // INITIALIZE_USER = "auth/initialize-user",

  // // USER CRUD
  SIGNIN_USER: "auth/signin-user",
  SIGNUP_USER: "auth/signup-user",

  // PROJECT CRUD
  CREATE_NOTE: "create-note",
  READ_NOTES: "read-notes",
  UPDATE_NOTE: "update-note",
  DELETE_NOTE: "delete-note",
});

export default SagaActions;
