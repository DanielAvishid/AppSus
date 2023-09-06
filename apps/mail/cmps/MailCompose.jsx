import { mailService } from '../services/mail.service.js'

const { useState } = React
const { useNavigate } = ReactRouterDOM
const { useOutletContext } = ReactRouterDOM

export function MailCompose() {
    const [mailToAdd, setMailToAdd] = useState(mailService.getEmptyMail())
    const onComposeMail = useOutletContext()
    const navigate = useNavigate()

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setMailToAdd(prevNewMail => ({ ...prevNewMail, [field]: value }))
    }

    function onSubmitMail(ev) {
        ev.preventDefault()
        onComposeMail(mailToAdd)
        navigate('/mail/list')
    }

    return (
        <section className="MailCompose">
            <div className="flex space-between">
                <h3>New Message</h3>
                <div>
                    <button>-</button>
                    <button>{'>'}</button>
                    <button>X</button>
                </div>
            </div>
            <form onSubmit={onSubmitMail}>
                <input type="email" onChange={handleChange} name='to' placeholder='To' />

                <input type="text" onChange={handleChange} name="subject" placeholder="Subject" />

                <input type="text" onChange={handleChange} name="body" />
                <button>Send</button>
            </form>
        </section>
    )
}