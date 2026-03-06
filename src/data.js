export const initialCategories = [
  {
    id: 'parks',
    name: 'Парки',
    icon: '🏞️',
    places: [
      {
        id: 'gorky',
        name: 'Парк Горького',
        description: 'Центральный парк культуры и отдыха',
        image: '🏞️',
        todos: [], // будут загружаться позже
      },
      {
        id: 'sokolniki',
        name: 'Сокольники',
        description: 'Большой парк для прогулок и спорта',
        image: '🏞️',
        todos: [],
      },
    ],
  },
  {
    id: 'museums',
    name: 'Музеи',
    icon: '🏛️',
    places: [
      {
        id: 'tretyakov',
        name: 'Третьяковская галерея',
        description: 'Главный музей русского искусства',
        image: '🏛️',
        todos: [],
      },
    ],
  },
  {
    id: 'restaurants',
    name: 'Рестораны',
    icon: '🍽️',
    places: [
      {
        id: 'pushkin',
        name: 'Кафе Пушкинъ',
        description: 'Исторический ресторан русской кухни',
        image: '🍽️',
        todos: [],
      },
    ],
  },
];
