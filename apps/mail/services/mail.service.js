import { localStorageService } from '../../../services/storage.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { MailsData } from './mailsData.js'

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
    getDefaultFilter
}

function query(filterBy) {
    return storageService.query(MAIL_KEY).then(mails => {
        console.log(filterBy)
        if (filterBy.isRead === 'true') {
            mails = mails.filter(mails => mails.isRead === true)
        } else if (filterBy.isRead === false) {
            mails = mails.filter(mails => mails.isRead === false)
        }
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
        mail.sentAt = Date.now()
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
        return mails.filter(mail => mail.isRead === false).length
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
    return { status: 'inbox', txt: '', isRead: '', isStared: null, labels: [] }
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


