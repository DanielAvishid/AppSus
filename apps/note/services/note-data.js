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
]

export const noteData = {
  getNotes,
}

function getNotes() {
  return noteDB
}
