import { colorSet } from '../style/theme';
import { format } from 'date-fns';

const initialState = {
  initialTodos: [
    {
      id: 1,
      title: '오늘의 할일',
      content: '끝내주게 숨쉬기',
      tag: 'entertainment',
      tagColor: colorSet.blue,
      done: true,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      id: 2,
      title: 'todo 구현하기',
      content: '할수있다아 ~~ :>',
      tag: 'study',
      tagColor: colorSet.green,
      done: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      id: 3,
      title: '뛰러가야징',
      content: '버티면 신기록 🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️',
      tag: 'health',
      tagColor: colorSet.orange,
      done: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      id: 4,
      title: '페이지 레이아웃',
      content: '디테일 페이지 레이아웃도 오늘 하자',
      tag: 'work',
      tagColor: colorSet.orange,
      done: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
  ],
  tags: [
    {
      color: '#FFDEFA',
      label: 'work',
    },
    {
      color: '#C5E9D2',
      label: 'study',
    },
    {
      color: '#D6E5FA',
      label: 'entertainment',
    },
    {
      color: '#FCD4BC',
      label: 'health',
    },
  ],
};

export const { initialTodos, tags } = initialState;
