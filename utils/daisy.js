import Chance from 'chance';
import { nanoid } from 'nanoid';

const chance = Chance();

const names = [
  'Brookhaven',
  'Buckhead',
  'Dawsonville',
  'Decatur',
  'Kennesaw',
  'Marietta',
  'Peachtree',
  'Perimeter',
  'Stone Mountain',
];

const generatePeople = () => {
  const limit = chance.integer({ min: 4, max: 24 });
  const tmp = Array(limit).fill(1);
  const list = tmp.map(_arg => {
    const name = chance.name();
    const job = chance.profession();
    const color = chance.color({ format: 'name' });

    return { name, job, color };
  });

  return list;
}

const generateStats = () => {
  const downloads = chance.integer({ min: 10000, max: 60000 });
  const limit = downloads < 26000 ? downloads / 2 : 13000;
  const users = chance.integer({ min: 2000, max: Math.floor(limit) });
  const registers = chance.integer({ min: 1000, max: users });
  const progress = chance.integer({ min: 10, max: 90 });
  
  return { downloads, progress, registers, users }
}

const dealers = () => {
  return names.map(name => {
    const id = nanoid();
    const stats = generateStats();
    const people = generatePeople();

    return { id, name, stats, people };
  })
};

const daisy = {
  dealers,
  names
}

export { daisy };
export default daisy;
