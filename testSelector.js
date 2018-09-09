const testname = process.argv[2];

var baseUrl = "https://pensive-bose-78b68c.netlify.com/";
//var baseUrl = "http://localhost:8000/";

//default for "part1"
let testsToRun = {
  url: baseUrl,
  appName: "Demo app",
  windowName: "Login Page",
  testName: "Login Page",
  goto2ndPage: false,
  viewportWidth: 1200,
  viewportHeight: 750
};

if (testname === "part2") {
  testsToRun = {
    url: baseUrl + "index_v2.html",
    appName: "Demo app",
    windowName: "Login Page",
    testName: "Login Page",
    goto2ndPage: false,
    viewportWidth: 1200,
    viewportHeight: 750
  };
}

//create baseline for the app.html
if (testname === "part_5_1") {
  testsToRun = {
    url: baseUrl + "app.html",
    appName: "Demo app",
    windowName: "Main app page",
    testName: "Main app page test",
    goto2ndPage: false,
    viewportWidth: 1400,
    viewportHeight: 750
  };
}

//Run tests on version 2 of the app(app_v2.html)
if (testname === "part_5_2") {
  testsToRun = {
    url: baseUrl + "app_v2.html",
    appName: "Demo app",
    windowName: "Main app page",
    testName: "Main app page test",
    goto2ndPage: false,
    viewportWidth: 1400,
    viewportHeight: 750
  };
}
module.exports = testsToRun;
