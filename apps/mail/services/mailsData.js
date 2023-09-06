const mailsDB = [
    {
        id: 'e101',
        subject: 'Hello there!',
        body: 'I want to greet you for coming today',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'soltan@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e103',
        subject: 'Tasks for the week!',
        body: 'Hey, this are the Tasks:',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'berkoviz@momo.com',
        to: 'user@appsus.com'
    }
]

export const BooksData = {
    getMails
}

function getMails() {
    return mailsDB
}
