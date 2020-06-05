function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [90, 40, 78, 50, 30, 48];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
