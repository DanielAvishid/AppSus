import { utilService } from '../../../services/util.service.js'

const noteDB = [
  {
    id: utilService.makeId(),
    createdAt: 1112222,
    type: 'NoteTxt',
    isPinned: true,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      title: 'Bobi and Me',
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: utilService.makeId(),
    createdAt: 1119999,
    type: 'NoteTxt',
    isPinned: true,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      title: 'Bobi and Me',
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: utilService.makeId(),
    createdAt: 11255533,
    type: 'NoteTxt',
    isPinned: false,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      title: 'Bobi and Me',
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: utilService.makeId(),
    createdAt: 1112222,
    type: 'NoteTxt',
    isPinned: true,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      title: 'Bobi and Me',
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: utilService.makeId(),
    createdAt: 1112222,
    type: 'NoteTxt',
    isPinned: true,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      title: 'Bobi and Me',
      txt: 'Fullstack Me Baby!',
      url: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?w=136&h=136',
    },
  },
]

export const noteData = {
  getNotes,
}

function getNotes() {
  return noteDB
}
