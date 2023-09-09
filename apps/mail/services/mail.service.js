import { localStorageService } from '../../../services/storage.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { MailsData } from './mailsData.js'
import { utilService } from '../../../services/util.service.js'

const MAIL_KEY = 'mailsDB'
_createMails()

const loggedInUser = {
    email: 'user@appsus.com',
    fullName: 'Daniel Ofir'
}

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getNextMailId,
    getUnreadMails,
    getDefaultFilter,
    getUserMail,
    getDefaultSort,
    getDefaultUnreadMails
}

function query(filterBy) {
    return storageService.query(MAIL_KEY).then(mails => {
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            mails = mails.filter(mail => {
                if (regex.test(mail.body) ||
                    regex.test(mail.subject) ||
                    regex.test(mail.from)
                ) return true
            })
        }

        if (filterBy.to) {
            const regex = new RegExp(filterBy.to, 'i')
            mails = mails.filter(mail => regex.test(mail.to))
        }

        if (filterBy.from) {
            const regex = new RegExp(filterBy.from, 'i')
            mails = mails.filter(mail => regex.test(mail.from))
        }
        if (filterBy.subject) {
            const regex = new RegExp(filterBy.subject, 'i')
            mails = mails.filter(mail => regex.test(mail.subject))
        }

        if (filterBy.isRead === 'showRead') {
            mails = mails.filter(mail => mail.isRead)
        } else if (filterBy.isRead === 'showUnread') {
            mails = mails.filter(mail => !mail.isRead)
        }
        if (filterBy.status === 'inbox') mails = mails.filter(mail => mail.to === loggedInUser.email)
        else if (filterBy.status === 'sent') mails = mails.filter(mail => mail.from === loggedInUser.email)
        else if (filterBy.status === 'starred') mails = mails.filter(mail => mail.isStarred === true)
        return mails
    })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
        .then(mail => {
            mail = _setNextPrevMailId(mail)
            return mail
        })
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        mail.sentAt = utilService.getDate(new Date(Date.now()))
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail() {
    return {
        subject: '',
        body: '',
        isRead: false,
        sentAt: null,
        removedAt: null,
        from: 'user@appsus.com',
        to: ''
    }
}

function getUnreadMails() {
    return storageService.query(MAIL_KEY).then(mails => {
        return mails.filter(mail => mail.isRead === false && mail.from !== loggedInUser.email).length
    })
}

function getNextMailId(mailId) {
    return storageService.query(MAIL_KEY).then(mails => {
        var idx = mails.findIndex(mail => mail.id === mailId)
        if (idx === mails.length - 1) idx = -1
        return mails[idx + 1].id
    })
}

function getDefaultFilter() {
    return { status: 'inbox', txt: '', from: '', to: '', subject: '', isRead: '', labels: [] }
}

function getDefaultSort() {
    return { date: false, subject: true, descendD: false, descendS: false }
}

function getDefaultUnreadMails() {
}

function _createMails() {
    let mails = localStorageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = MailsData.getMails()
        localStorageService.saveToStorage(MAIL_KEY, mails)
    }
}

function _setNextPrevMailId(mail) {
    return storageService.query(MAIL_KEY).then((mails) => {
        const mailIdx = mails.findIndex((currMail) => currMail.id === mail.id)
        const nextMail = mails[mailIdx + 1] ? mails[mailIdx + 1] : mails[0]
        const prevMail = mails[mailIdx - 1] ? mails[mailIdx - 1] : mails[mails.length - 1]
        mail.nextMailId = nextMail.id
        mail.prevMailId = prevMail.id
        return mail
    })
}

function getUserMail() {
    return loggedInUser.email
}


