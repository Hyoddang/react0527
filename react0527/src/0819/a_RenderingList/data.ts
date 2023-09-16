type Person = {
  id?: number;
  name: string;
  profession: string;
  imageId: string;
}

type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
}

export const people: Person[] = [
  {
    id: 1,
    name: 'person1',
    profession: 'mathematician',
    imageId: 'MK3eW3A'
  },
  {
    id: 2,
    name: 'person2',
    profession: 'chemist',
    imageId: 'MK3eW3A'
  },
  {
    id: 3,
    name: 'person3',
    profession: 'physicist',
    imageId: 'MK3eW3A'
  },
  {
    id: 4,
    name: 'person4',
    profession: 'chemist',
    imageId: 'MK3eW3A'
  },
  {
    id: 5,
    name: 'person5',
    profession: 'astrophycist',
    imageId: 'MK3eW3A'
  }
]

// Practice.tsx에서 사용할 데이터 목록
type PostProps = {
  id: number;
  title: string;
  content: string;
}

export const postData: PostProps[] = [
  {
    id: 0,
    title: 'post 1',
    content: 'content 1'
  },
  {
    id: 1,
    title: 'post 2',
    content: 'content 2'
  },
  {
    id: 2,
    title: 'post 3',
    content: 'content 3'
  },
  {
    id: 3,
    title: 'post 4',
    content: 'content 4'
  }
]

//! RenderingList03.tsx에서 사용할 데이터
export const recipes: Recipe[] = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
  },
  {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'],
  },
  {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
  }
];