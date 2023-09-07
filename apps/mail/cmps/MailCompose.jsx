import { mailService } from '../services/mail.service.js'

const { useState } = React
const { useNavigate } = ReactRouterDOM
const { useOutletContext } = ReactRouterDOM
const { Link } = ReactRouterDOM

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
        navigate('/mail/inbox')
    }

    return (
        <section className="MailCompose flex col">
            <div className="header-compose flex space-between">
                <h3>New Message</h3>
                <div>
                    <button>-</button>
                    <button>{'>'}</button>
                    <Link to='/mail/inbox'>X</Link>
                </div>
            </div>
            <form className='flex col' onSubmit={onSubmitMail}>
                <input type="email" onChange={handleChange} name='to' placeholder='To' />

                <input type="text" onChange={handleChange} name="subject" placeholder="Subject" />

                <textarea className='body-area' name="body" onChange={handleChange}>

                </textarea>

                {/* <input className='body-input' type="text" onChange={handleChange} name="body" /> */}
                <button className='send-btn'>Send</button>
            </form>
        </section>
    )
}