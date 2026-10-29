export const checkValidateData = (email, password, name) => {
  const IsFullNameValid = /^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}/.test(name);
  const IsEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );
  const IsPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password,
    );
  if (!IsEmailValid) {
    return "Email ID is not valid";
  }
  if (!IsPasswordValid) {
    return "Password is not valid";
  }
  if (name !== null && !IsFullNameValid) {
    return "Name is not valid";
  }
  return null;
};
