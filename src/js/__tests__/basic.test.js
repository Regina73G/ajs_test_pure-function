import { healthHero } from "../app.js";

const heroes = [
  ["Маг", 90, "healthy"],
  ["Воин", 50, "wounded"],
  ["Лучник", 15, "wounded"],
  ["Ассасин", 10, "critical"]
];

test.each(heroes)("testing heroes function with %n name and %h healt", (name, health, expectedStatus) => {
  const result = healthHero({ name: name, health: health });
  expect(result).toBe(expectedStatus);
})
