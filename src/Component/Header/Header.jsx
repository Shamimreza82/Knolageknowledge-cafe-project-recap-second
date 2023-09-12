import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center mt-3'>
                <h1 className='text-3xl font-bold'>knowledge Cafe</h1>
                <img src={Profile} alt="" />
            </nav>
            <hr className='my-5' />
        </header>
    );
};

export default Header;