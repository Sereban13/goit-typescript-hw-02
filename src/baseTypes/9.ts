/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type MixType = {
[key: string]: string | number | Array<string> | object,
}
const page1: MixType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: MixType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};