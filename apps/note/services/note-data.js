import { utilService } from '../../../services/util.service.js'

const noteDB = [
  // {
  //   id: utilService.makeId(),
  //   createdAt: 1112222,
  //   type: 'NoteTxt',
  //   isPinned: true,
  //   style: {
  //     backgroundColor: '#00d',
  //   },
  //   info: {
  //     title: 'Bobi and Me',
  //     txt: 'Fullstack Me Baby!',
  //   },
  // },
  // {
  //   id: utilService.makeId(),
  //   createdAt: 1119999,
  //   type: 'NoteTxt',
  //   isPinned: true,
  //   style: {
  //     backgroundColor: '#00d',
  //   },
  //   info: {
  //     title: 'Bobi and Me',
  //     txt: 'Fullstack Me Baby!',
  //   },
  // },
  // {
  //   id: utilService.makeId(),
  //   createdAt: 11255533,
  //   type: 'NoteTxt',
  //   isPinned: false,
  //   style: {
  //     backgroundColor: '#00d',
  //   },
  //   info: {
  //     title: 'Bobi and Me',
  //     txt: 'Fullstack Me Baby!',
  //   },
  // },
  // {
  //   id: utilService.makeId(),
  //   createdAt: 1112222,
  //   type: 'NoteTxt',
  //   isPinned: true,
  //   style: {
  //     backgroundColor: '#00d',
  //   },
  //   info: {
  //     title: 'Bobi and Me',
  //     txt: 'Fullstack Me Baby!',
  //   },
  // },
  // {
  //   id: utilService.makeId(),
  //   createdAt: 1112222,
  //   type: 'NoteTxt',
  //   isPinned: true,
  //   style: {
  //     backgroundColor: '#00d',
  //   },
  //   info: {
  //     title: 'Bobi and Me',
  //     txt: 'Fullstack Me Baby!',
  //     url: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?w=136&h=136',
  //   },
  // },
]

const Bgcs = [
  'transparent',
  'lightgreen',
  'lightblue',
  'lightpink',
  'lightcoral',
  'lightsalmon',
  'lightseagreen',
]

const titles = [
  'Bobi and Me',
  'React Development',
  'UI/UX Design',
  'Coding Challenges',
  'Project Management',
  'Data Analysis',
  'Machine Learning',
  'Web Development',
  'JavaScript Mastery',
]

const texts = [
  'Fullstack Me Baby!',
  'Learning React is awesome!',
  'Designing beautiful interfaces.',
  'Solving coding challenges daily.',
  'Managing projects efficiently.',
  'Analyzing data for insights.',
  'Building intelligent systems.',
  'Creating interactive web apps.',
  'Mastering JavaScript skills.',
]

const urls = [
  'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
  'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80',
  'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
  'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?w=136&h=136',
  'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  '',
  '',
]

for (let i = 0; i < 15; i++) {
  const randomBgc = Bgcs[Math.floor(Math.random() * titles.length)]
  const randomTitle = titles[Math.floor(Math.random() * titles.length)]
  const randomText = texts[Math.floor(Math.random() * texts.length)]
  const randomUrl = urls[Math.floor(Math.random() * urls.length)]
  const isPinned = Math.random() < 0.5 // 50% chance of being pinned

  noteDB.push({
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteTxt',
    isPinned,
    style: {
      backgroundColor: randomBgc,
    },
    info: {
      title: randomTitle,
      txt: randomText,
      url: randomUrl,
    },
  })
}

export const noteData = {
  getNotes,
}

function getNotes() {
  return noteDB
}
