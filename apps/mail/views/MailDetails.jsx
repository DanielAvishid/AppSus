import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
const { useOutletContext } = ReactRouterDOM
const { Link } = ReactRouterDOM

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const [, , onRemoveMail] = useOutletContext()
    const { mailId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        mailService.get(mailId)
            .then(setMail)
            .catch(err => {
                console.log('err:', err)
                navigate('/mail/inbox')
            })
    }, [mailId])

    function onBack() {
        navigate('/mail/inbox')
    }

    function removeMail() {
        console.log('HIO')
        onRemoveMail(null, mailId)
        onBack()
    }

    if (!mail) return <div>Loading...</div>
    return (
        <section className="MailDetails">
            <div className="mail-container">
                <div className="mail-header flex space-between">
                    <div>
                        <button onClick={onBack}>Back</button>
                        <button onClick={() => removeMail()}>Remove</button>
                    </div>
                    <div>
                        <Link to={`/mail/${mail.nextMailId}`}>Next Mail</Link>
                        <Link to={`/mail/${mail.prevMailId}`}>Previous Mail</Link>
                    </div>
                </div>
                <h2>{mail.subject}</h2>
                <div className='container flex space-between'>
                    <span>{mail.from}</span>
                    <div>
                        <span>{mail.sentAt}</span>
                        <button>Star</button>
                        <button>Reply</button>
                        <button>More</button>
                    </div>
                </div>
                <div>
                    <p>{mail.body}</p>
                </div>
                <div className='container'>
                    <button>Reply</button>
                    <button>Forward</button>
                </div>
            </div>
        </section>
    )

}