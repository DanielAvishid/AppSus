import { AppHeader } from '../cmps/AppHeader.jsx'

const { useNavigate } = ReactRouterDOM

export function Home() {
    const navigate = useNavigate()

    return (
        <section className="home">
            <AppHeader />
            <section className='hero'>
                <div className='hero-content'>
                    <h1>AppSus</h1>
                    <div className='service-container flex align-center'>
                        <p className='flex align-center'>Mail Services <img onClick={() => navigate('/mail/list')} className='logo logo-service' src="/assets/img/gmail-logo.png" alt="" /></p>
                        <p className='flex align-center'>Keep Services
                            <img onClick={() => navigate('/note')}
                                className="logo logo-keep"
                                src="'img/hero.jpg" />
                        </p>
                    </div>
                    <h2>Expanding in future</h2>
                </div>
            </section>
        </section>
    )
}