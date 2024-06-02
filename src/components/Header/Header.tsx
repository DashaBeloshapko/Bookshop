import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useState } from 'react'

const Header = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const clickSearch = () => {
        setClick(!click)
    }
    return (
        <div className='header_wrap'>
            <div className='header_Title'>
                Bookstore
            </div>
            <div className='header-search-wrap'>
                <input
                    className='header-search'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            navigate(`./books/search-results?search=${search}`)
                        }
                    }} />
                <button className='header-search-but' onClick={clickSearch}></button>
            </div>
            <div className='header_icon-wrap'>
                <Link to='/favourite'><button className='header_icon-but header_icon-heart'></button></Link>
                <Link to='/cart'><button className='header_icon-but header_icon-bag'></button></Link>
                <button className='header_icon-but header_icon-man'></button>
            </div>
        </div>
    )
}

export { Header }