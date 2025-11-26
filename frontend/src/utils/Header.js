import React, { Fragment } from 'react';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { ArrowUpTrayIcon, Bars3Icon, ClipboardDocumentListIcon } from '@heroicons/react/20/solid';


const Header = ({ userInfo }) => {
    const isAdmin = userInfo && (userInfo[0]?.role === "admin" || userInfo[0]?.role === "owner");

    return (
        <>
            <header className="sticky top-0 z-50 flex justify-between items-center h-20 w-full px-4 md:px-8 bg-white text-secondary-800 shadow-elegant">
                <div className="flex items-center">
                    <div className="flex items-center mr-8">
                        <img src="/images/logo.png" alt="GMC Logo" className="md:w-12 md:h-12 w-8 h-8 rounded-lg drop-shadow-md" />
                        <span className="font-sans ml-3 text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                            GMC StickerForm v2
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-1">
                        <a href="/"
                            className="px-4 py-2 rounded-lg text-secondary-700 hover:bg-primary-50 hover:text-primary-600
                                    transition-colors duration-200 font-medium">
                            ステッカー申請
                        </a>
                        <a href="/list/"
                            className="px-4 py-2 rounded-lg text-secondary-700 hover:bg-primary-50 hover:text-primary-600
                                    transition-colors duration-200 font-medium">
                            申請済みリスト
                        </a>
                        {isAdmin && (
                            <a href="/admin/list/"
                                className="px-4 py-2 rounded-lg text-secondary-700 hover:bg-primary-50 hover:text-primary-600
                                        transition-colors duration-200 font-medium">
                                運営用
                            </a>
                        )}
                    </nav>
                </div>
                <div className="flex">
                    <Popover className="block md:hidden relative">
                        {({ open }) => (
                            <>
                                <PopoverButton className={`${open ? "ring-2 ring-primary-500" : ""}
                                                                  p-2 rounded-full hover:bg-primary-50 transition-all duration-200
                                                                  focus:outline-none focus:ring-2 focus:ring-primary-500`}>
                                    <Bars3Icon className="w-8 max-sm:w-6" />
                                </PopoverButton>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <PopoverPanel className="absolute right-0 z-10 mt-3 w-96 max-w-sm max-sm:w-64 max-sm:right-4 animate-slide-up">
                                        <div className="card-elegant overflow-hidden">
                                            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6">
                                                <div className="space-y-4 flex flex-col">
                                                    <a href="/" className="flex rounded-lg text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 font-medium">
                                                        <ArrowUpTrayIcon className="w-6" />&ensp;ステッカー申請
                                                    </a>
                                                    <a href="/list/" className="flex rounded-lg text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 font-medium">
                                                        <ClipboardDocumentListIcon className="w-6" />&ensp;申請済みリスト
                                                    </a>
                                                    {isAdmin && (
                                                        <a href="/admin/list/" className="rounded-lg text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 font-medium">
                                                            運営用
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverPanel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
            </header>
        </>
    );
}

export default Header;
