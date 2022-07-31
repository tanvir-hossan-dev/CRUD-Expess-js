const getData = (user) => {
  return {
    type: "GET_DATA",
    payload: user,
  };
};

export default getData;
