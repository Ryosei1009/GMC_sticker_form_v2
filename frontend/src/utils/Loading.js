import React from 'react'

const Loading = () => {
    return (
        <>
            <section className="flex justify-center items-center mt-20 mb-24 text-black">
                <img className="w-1/4 mr-8" src="/images/logo.png" alt="" />
                <div className="justify-start w-2/4">
                    <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl font-bold">Loading...</h1>
                    <p className="text-lg max-md:text-base max-sm:text-sm">データを取得しています。</p>
                    <p className="text-lg max-md:text-base max-sm:text-sm">しばらくお待ちください。</p>
                </div>
            </section>
        </>
    )
}

export default Loading