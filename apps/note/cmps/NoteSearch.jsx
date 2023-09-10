const { Link } = ReactRouterDOM

export function NoteSearch() {
    return (
        <section className="note-filter-section flex column">
            <section className="note-filter">
                <p>Types</p>
                <div className="note-filter-types flex align-center">
                    {/* <Link to="/note/search/list">
            <div className="flex column align-center justify-center">
              <span class="material-symbols-outlined flex align-center">list</span>
              <p>Lists</p>
            </div>
          </Link> */}

                    <Link to="/note/search/image">
                        <div className="flex column align-center justify-center">
                            <span class="material-symbols-outlined flex align-center">image</span>
                            <p>Images</p>
                        </div>
                    </Link>

                    <Link to="/note/search/text">
                        <div className="flex column align-center justify-center">
                            <span class="material-symbols-outlined flex align-center">article</span>
                            <p>Text Only</p>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="note-filter">
                <p>Colors</p>
                <div className="note-color-types flex align-center">
                    <div className="lightblue"></div>
                    <div className="lightgreen"></div>
                    <div className="lightpink"></div>
                    <div className="lightcoral"></div>
                    <div className="lightsalmon"></div>
                    <div className="lightseagreen"></div>
                </div>
            </section>
        </section>
    )
}
