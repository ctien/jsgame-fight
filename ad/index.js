if (process.env.NODE_ENV === "production") {
  console.log("production");
  require("./dist/server.bundle");
} else {
  require("@babel/register");
  require("./src/server");
}
