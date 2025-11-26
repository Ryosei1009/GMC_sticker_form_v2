import React from 'react';


const Header = ({ userInfo }) => {
    return (
        <>
            <header className="flex bg-opacity-30 bg-white dark:bg-dark-nav justify-around items-center h-16 w-full text-black dark:text-dark duration-300 z-50">
                <ul className="flex items-center text-xl max-sm:text-xs font-bold">
                    <li className="list-none inline-block mr-5 max-sm:mr-3">
                        <div className="block text-center duration-300">
                            <img src="/images/logo.png" alt="" className="w-11 h-11 max-sm:w-10 max-sm:h-10" />
                        </div>
                    </li>
                    <li className="list-none inline-block mr-5 max-sm:mr-2">
                        <a href="/" className="text-black hover:text-black/70 focus:outline-none">
                            <span>ステッカー申請</span>
                        </a>
                    </li>
                    <li className="list-none inline-block mr-5 max-sm:mr-2">
                        <a href="/list/" className="text-black hover:text-black/70 focus:outline-none">
                            <span>申請済みリスト</span>
                        </a>
                    </li>
                </ul>
                <ul className="flex items-center text-xl max-sm:text-xs font-bold">
                    {userInfo && (
                        <li className="list-none inline-block mr-5 max-sm:mr-2">
                            <a href="/admin/list/" className="text-black hover:text-black/70 focus:outline-none">
                                <span>運営用</span>
                            </a>
                        </li>
                    )}
                </ul>
            </header>
        </>
    );
}

export default Header;
