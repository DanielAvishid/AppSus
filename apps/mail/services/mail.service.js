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
    getUnreadMails
}

function query(filterBy) {
    return storageService.query(MAIL_KEY).then(mails => {
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
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail() {
    return {
        subject: '',
        body: '',
        isRead: false,
        sentAt: '',
        removedAt: '',
        from: '',
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
    return { txt: '', isRead: '', isStared: '' }
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

