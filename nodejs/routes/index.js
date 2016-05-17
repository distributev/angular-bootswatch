var user = require("./user.js");

module.exports = function(app) {
    user.setup(app);
};