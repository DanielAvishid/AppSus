export function FilterOptions({ onSubmitFilter, handleChange }) {
    return (
        <section className='filter-options flex col'>
            <div>
                <div className='flex col'>
                    <div className='filter-options-container flex'>
                        <label htmlFor="from">From</label>
                        <input
                            name='from'
                            type="text"
                            id='from'
                            onChange={handleChange} />
                    </div>
                    <div className='filter-options-container flex'>
                        <label htmlFor="to">To</label>
                        <input
                            name='to'
                            type="text"
                            id='to'
                            onChange={handleChange} />
                    </div>
                    <div className='filter-options-container flex'>
                        <label htmlFor="subject">Subject</label>
                        <input
                            name='subject'
                            type="text"
                            id='subject'
                            onChange={handleChange} />
                    </div>
                </div>

            </div>
            <div className='flex radio-container'>
                <div>
                    <input
                        type="radio"
                        id="all"
                        name="isRead"
                        value=""
                        onChange={handleChange} />
                    <label htmlFor="all">All</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="read"
                        name="isRead"
                        value="showRead"
                        onChange={handleChange} />
                    <label htmlFor="read">Read</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="unread"
                        name="isRead"
                        value="showUnread"
                        onChange={handleChange} />
                    <label htmlFor="unread">Unread</label>
                </div>
            </div>

            <div>
                <button title="Search mail" onClick={onSubmitFilter}>Search</button>
            </div>
        </section >
    )
}