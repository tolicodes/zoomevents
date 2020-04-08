import faker from "faker";

export const generateEvent = () => ({
  header_image: faker.image.imageUrl(),
  date_start: faker.date.future() / 1000,
  name: faker.lorem.sentence(),
  price: parseFloat(faker.commerce.price()) / 100
});

export const generateEvents = (n?: number) => {
  n = n || Math.ceil(Math.random() * 10);
  const events = [];
  for (var i = 0; i < n; i++) {
    events.push(generateEvent());
  }
  return events;
};

export const generateCategory = (numberEvents?: number) => ({
  name: faker.lorem.sentence(),
  events: generateEvents(numberEvents)
});

export const generateCategories = (n: number) => {
  n = n || Math.ceil(Math.random() * 10);

  const categories = [];
  for (var i = 0; i < n; i++) {
    categories.push(generateCategory());
  }
  return categories;
};
