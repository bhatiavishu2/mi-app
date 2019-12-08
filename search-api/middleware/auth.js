const axios = require("axios");
module.exports = () => {
  return (req, res, next) => {
    const authToken = req.headers["authorization"];
    if (authToken) {
      axios
      .get("http://localhost:4000/users/me", {
        headers: { authorization: authToken }
      })
        .then(response => {
          var { role, name } = response.data;
          if (role && role.toLowerCase() === "admin") {
            req.adminName = name;
            next();
          } else {
            req.userName = name;
            next();
          }
        })
        .catch(error => {
          res.status(403).send({ msg: "invalid token" });
        });
    } else {
      next();
    }
  };
};
