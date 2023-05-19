const respone = (statusCode, data, messege, res) => {
  res.status(statusCode).json({
    payload: {
      status_code: statusCode,
      datas: data,
      messege: messege,
    },
    pagination: {
      prev: "",
      next: "",
    },
  });
};

module.exports = respone;
