const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Anita Gal";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 1337;
  const employee = new Employee("Anita Gal", testValue);
  expect(employee.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "agalagher.@gmail.com";
  const employee = new Employee("Anita Gal", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Anita Gal";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 1337;
  const employee = new Employee("Anita Gal", testValue);
  expect(employee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "agalagher.@gmail.com";
  const employee = new Employee("Anita Gal", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const employee = new Employee("Anita Gal", 1, "agalagher.@gmail.com");
  expect(employee.getRole()).toBe(testValue);
});
