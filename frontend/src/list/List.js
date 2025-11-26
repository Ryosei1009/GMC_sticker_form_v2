import React, { useEffect, useState } from 'react'
import EachSticker from './components/EachSticker';
import Loading from '../utils/Loading';

const List = () => {
    const [stickers, setStickers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalStickers, setTotalStickers] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [showOnlyMine, setShowOnlyMine] = useState(false);
    const [userUuids, setUserUuids] = useState([]);

    useEffect(() => {
        const uuidArray = localStorage.getItem("uuid");
        if (uuidArray) {
            setUserUuids(JSON.parse(uuidArray));
        }
    }, []);

    useEffect(() => {
        fetchStickers();
    }, [currentPage, searchTerm, showOnlyMine]);

    const fetchStickers = async () => {
        const uuidArray = localStorage.getItem("uuid");
        if (!uuidArray) return;

        setLoading(true);
        try {
            const params = new URLSearchParams({
                page: currentPage.toString(),
                limit: '100',
                search: searchTerm,
                showOnlyMine: showOnlyMine.toString()
            });

            const response = await fetch(`${process.env.REACT_APP_API_DOMAIN}/sticker/get/approved_and_self?${params}`, {
                headers: {
                    'uuid': uuidArray,
                }
            });

            const data = await response.json();
            setStickers(data.stickers);
            setTotalPages(data.pagination.totalPages);
            setTotalStickers(data.pagination.totalStickers);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(searchInput);
        setCurrentPage(1);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit(e);
        }
    };

    const handleFilterChange = (e) => {
        setShowOnlyMine(e.target.checked);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderPagination = () => {
        const pageNumbers = [];
        const maxVisiblePages = window.innerWidth < 640 ? 3 : 5; // スマホでは3ページ、デスクトップでは5ページ表示
        const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-2">
                {/* モバイル用のシンプルナビゲーション */}
                <div className="flex sm:hidden items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 text-sm"
                    >
                        ‹
                    </button>

                    <span className="px-3 py-2 text-sm text-gray-600">
                        {currentPage} / {totalPages}
                    </span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 text-sm"
                    >
                        ›
                    </button>
                </div>

                {/* デスクトップ用の詳細ナビゲーション */}
                <div className="hidden sm:flex items-center gap-1">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 text-sm"
                    >
                        前へ
                    </button>

                    {startPage > 1 && (
                        <>
                            <button
                                onClick={() => handlePageChange(1)}
                                className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
                            >
                                1
                            </button>
                            {startPage > 2 && <span className="px-2 py-2 text-gray-500 text-sm">...</span>}
                        </>
                    )}

                    {pageNumbers.map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 rounded text-sm ${
                                currentPage === page
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    {endPage < totalPages && (
                        <>
                            {endPage < totalPages - 1 && <span className="px-2 py-2 text-gray-500 text-sm">...</span>}
                            <button
                                onClick={() => handlePageChange(totalPages)}
                                className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
                            >
                                {totalPages}
                            </button>
                        </>
                    )}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 text-sm"
                    >
                        次へ
                    </button>
                </div>
            </div>
        );
    };

    if (loading && stickers.length === 0) {
        return <Loading />;
    }

    return (
        <>
            <div className="flex justify-center mx-3">
                <div className="max-w-5xl w-full my-16">
                    <div className="text-center text-4xl font-bold mb-8">
                        申請済みステッカー
                    </div>

                    <div className="mb-6 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div className="flex-1 max-w-md">
                                <form onSubmit={handleSearchSubmit} className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="ステッカー名で検索..."
                                        value={searchInput}
                                        onChange={handleSearchInputChange}
                                        onKeyPress={handleKeyPress}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        検索
                                    </button>
                                </form>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="showOnlyMine"
                                    checked={showOnlyMine}
                                    onChange={handleFilterChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="showOnlyMine" className="text-sm font-medium text-gray-900">
                                    自分の申請のみ表示
                                </label>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center">
                            <Loading />
                        </div>
                    ) : (
                        <>
                            {totalPages > 1 && renderPagination()}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {stickers.map((sticker) => (
                                    <EachSticker
                                        sticker={sticker}
                                        key={sticker.id}
                                        userUuids={userUuids}
                                    />
                                ))}
                            </div>

                            {stickers.length === 0 && (
                                <div className="text-center text-gray-500 mt-8">
                                    {showOnlyMine ? '申請したステッカーがありません' : '該当するステッカーがありません'}
                                </div>
                            )}

                            {totalPages > 1 && renderPagination()}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default List