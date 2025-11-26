import React, { useState } from 'react'
import ActionPerfect from '../utils/ActionPerfect';
import Form from './components/Form';

const StickerForm = () => {
    const [isUploadPerfect, setIsUploadPerfect] = useState(false);
    const [isUpload500Error, setIsUpload500Error] = useState(false);
    const [isUpload502Error, setIsUpload502Error] = useState(false);

    return (
        <>
            <div>
                <div className="relative justify-center flex">
                    <div className="opacity-100 text-black absolute max-sm:top-12 top-28 text-center mx-4">
                        <span className="block text-4xl max-sm:text-3xl font-bold mb-1">ステッカー申請フォーム</span>
                    </div>
                    <img src="/images/bg.png" alt="" className="opacity-20 h-72 max-sm:h-48 w-full object-cover"></img>
                </div>
                <Form setIsUpload500Error={setIsUpload500Error} setIsUpload502Error={setIsUpload502Error} setIsUploadPerfect={setIsUploadPerfect} />
            </div>
            <ActionPerfect Perfect={isUploadPerfect} onClose={() => {
                window.location.reload()
                setIsUploadPerfect(false)
            }} title={"Perfect"} text={"ステッカーの申請に成功しました。"} />
            <ActionPerfect Perfect={isUpload500Error} onClose={() => { setIsUpload500Error(false) }} title={"Error"} text={"ステッカーの申請に失敗しました。\n名前を変更してください。"} />
            <ActionPerfect Perfect={isUpload502Error} onClose={() => { setIsUpload502Error(false) }} title={"Error"} text={"ステッカーの申請に失敗しました。\nサーバーが落ちているようですので\nチケットから報告お願いします。"} />
        </>
    )
}

export default StickerForm