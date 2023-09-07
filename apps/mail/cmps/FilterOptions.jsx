export function FilterOptions({ onSubmitFilter, handleChange }) {
    return (
        <section className='filter-options flex'>


            <fieldset>
                <legend>Read / Unread</legend>

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
            </fieldset>
            <div>
                <button onClick={onSubmitFilter}>Search</button>
            </div>
        </section>
    )
}