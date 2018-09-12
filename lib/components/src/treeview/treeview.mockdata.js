export const mockdata = {
  dataset: {
    '1': {
      children: ['1-11', '1-12'],
      depth: 0,
      id: 1,
      isExpanded: true,
      name: 'Parent A',
      path: '1',
      pid: '',
    },
    '2': {
      children: ['2-21', '2-22'],
      depth: 0,
      id: 2,
      isExpanded: true,
      isSelected: true,
      name: 'Parent B',
      path: '2',
      pid: '',
    },
    root: {
      children: ['1', '2'],
    },
    '1-11': {
      id: 11,
      depth: 1,

      name: 'Child A1',
      isSelected: true,
      path: '1-11',
      pid: '1',
    },
    '1-12-121': {
      id: 121,
      depth: 2,
      name: 'GrandChild A1.1',
      path: '1-12-121',
      pid: '1-12',
    },
    '1-12-122': {
      id: 122,
      depth: 2,
      name: 'GrandChild A1.2',
      path: '1-12-122',
      pid: '1-12',
    },
    '1-12': {
      id: 12,
      name: 'Child A2',
      depth: 1,
      isExpanded: false,
      children: ['1-12-121', '1-12-122'],
      path: '1-12',
      pid: '1',
    },
    '2-21': {
      id: 21,
      depth: 1,
      name: 'Child B1',
      path: '2-21',
      pid: '2',
    },
    '2-22': {
      id: 22,
      depth: 1,
      name: 'Child B2',
      path: '2-22',
      pid: '2',
    },
  },
};