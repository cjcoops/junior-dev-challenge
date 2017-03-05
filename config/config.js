var config = {
	port: process.env.PORT || 3000,
	db: process.env.DATABASE || "mongodb://localhost/cordant_dev",
	test_port: 3001,
	test_db: "mongodb://localhost/cordant_test"
}
module.exports = config;
