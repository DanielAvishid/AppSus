import { mailService } from '../services/mail.service.js'
import { SideBarMail } from '../cmps/SideBarMail.jsx'
import { AppHeaderMail } from '../cmps/AppHeaderMail.jsx'

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
const { Link } = ReactRouterDOM

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const { mailId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        mailService.get(mailId)
            .then(setMail)
            .catch(err => {
                console.log('err:', err)
                navigate('/mail')
            })
    }, [mailId])

    function onBack() {
        navigate('/mail')
    }

    if (!mail) return <div>Loading...</div>
    return (
        <section className="mail-details">
            <AppHeaderMail />
            <div className="flex">
                {/* <SideBarMail /> */}
                <div className="mail-container">
                    <div className="mail-header">
                        <button onClick={onBack}>Back</button>
                        <Link to={`/mail/${mail.nextMailId}`}>Next Mail</Link>
                        <Link to={`/mail/${mail.prevMailId}`}>Previous Mail</Link>
                    </div>
                    <div>
                        <h2>{mail.subject}</h2>
                    </div>
                    <div>
                        <span>{mail.from}</span>
                        <div>
                            <button>Star</button>
                            <button>Reply</button>
                            <button>More</button>
                        </div>
                    </div>
                    <div>
                        <p>{mail.body}</p>
                    </div>
                    <div>
                        <button>Reply</button>
                        <button>Forward</button>
                    </div>
                </div>
            </div>
        </section>
    )

}