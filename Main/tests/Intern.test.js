const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Worcester State University";
  const intern = new Intern("Anita Gal", 1, "agalagher.@gmail.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intern = new Intern("Anita Gal", 1, "agalagher.@gmail.com", "Worcester State University");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Worcester State University";
  const intern = new Intern("Anita Gal", 1, "agalagher.@gmail.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});
