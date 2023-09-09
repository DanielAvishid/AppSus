import { utilService } from '../../../services/util.service.js'

const mailsDB = [
    {
        id: 'e101',
        subject: 'FHello there!',
        body: 'I want to greet you for coming today I want to greet you for coming today I want to greet you for coming today I want to greet you for coming today I want to greet you for coming today I want to greet you for coming today I want to greet you for coming today',
        isRead: false,
        isStarred: false,
        sentAt: utilService.getDate(new Date(1551133930594)),
        removedAt: null,
        from: 'soltan@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'DMiss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        isStarred: false,
        sentAt: utilService.getDate(new Date(1551133930594)),
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e103',
        subject: 'STasks for the week!',
        body: 'Hey, this are the Tasks:',
        isRead: false,
        isStarred: false,
        sentAt: utilService.getDate(new Date(1551133930594)),
        removedAt: null,
        from: 'berkoviz@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e104',
        subject: 'ATasks for the week!',
        body: 'Hey, this are the Tasks:',
        isRead: false,
        isStarred: false,
        sentAt: utilService.getDate(new Date(1551133930594)),
        removedAt: null,
        from: 'berkoviz@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e105',
        subject: 'CTasks for the week!',
        body: 'Hey, this are the Tasks:',
        isRead: false,
        isStarred: false,
        sentAt: utilService.getDate(new Date(1551133930594)),
        removedAt: null,
        from: 'berkoviz@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e106',
        subject: 'BTasks for the week!',
        body: 'Hey, this are the Tasks:',
        isRead: false,
        isStarred: false,
        sentAt: utilService.getDate(new Date(1551133930594)),
        removedAt: null,
        from: 'berkoviz@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e107',
        subject: 'Tasks for the week!',
        body: 'Hey, this are the Tasks:',
        isRead: false,
        isStarred: false,
        sentAt: utilService.getDate(new Date(1551133930594)),
        removedAt: null,
        from: 'berkoviz@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e108',
        subject: 'Tasks for the week!',
        body: 'Hey, this are the Tasks:',
        isRead: false,
        isStarred: false,
        sentAt: utilService.getDate(new Date(1551133930594)),
        removedAt: null,
        from: 'berkoviz@momo.com',
        to: 'user@appsus.com'
    }
]

export const MailsData = {
    getMails
}

function getMails() {
    return mailsDB
}
