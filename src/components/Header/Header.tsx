import './Header.css'

const Header = () => {
    return (
        <div className='header_wrap'>
            <div className='header_Title'>
                Bookstore
            </div>
            <div className='header-search-wrap'>
                <input className='header-search' placeholder='Search' />
                <button className='header-search-but'></button>
            </div>
            <div className='header_icon-wrap'>
                <button className='header_icon-but header_icon-heart'></button>
                <button className='header_icon-but header_icon-bag'></button>
                <button className='header_icon-but header_icon-man'></button>
            </div>
        </div>
    )
}

export { Header }