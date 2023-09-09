import { AppHeader } from '../cmps/AppHeader.jsx'

export function Home() {
    return (
        <section className="home">
            <AppHeader />
            <section className='hero'>
                <div className='hero-content'>
                    <h1>AppSus</h1>
                    <div className='flex align-center'>
                        <p className='flex align-center'>Mail Services <img className='logo' src="/assets/img/gmail-logo.png" alt="" /></p>
                        <p className='flex align-center'>Keep Services <img className="logo" src="/assets/img/Google_Keep_logo.png" alt="" /></p>
                    </div>
                </div>
            </section>
        </section>
    )
}