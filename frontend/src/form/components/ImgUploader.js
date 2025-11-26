import React from 'react'
import { useState, useRef } from 'react';

const ImgUploader = ({ setFormData, displayError, formData }) => {
    const [isNotImage, setIsNotImage] = useState(false);
    const [isFileLimit, setIsFileLimit] = useState(false);
    const [previewUrl, setPreviewUrl] = useState();
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setIsNotImage(true);
                setIsFileLimit(false);
                return;
            };
            setIsNotImage(false);
            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new window.Image();

                img.src = reader.result;

                img.onload = () => {
                    if (img.width > 1001 || img.height > 1001) {
                        setIsFileLimit(true);
                        return;
                    }

                    setIsFileLimit(false);
                    setPreviewUrl(reader.result);
                    setFormData((prevData) => ({
                        ...prevData,
                        image: file,
                    }));
                };
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className="relative flex flex-col mt-12 bg-white px-6 py-6 rounded-md border-gray-300 border-1" id='image'>
            <label className="text-lg">
                アイテム画像<span className="text-red-500"> *</span>
            </label>
            <div className="text-gray-500 text-sm">1000×1000以下のサイズでpng拡張子です。jpgやgif等は認められません。</div>
            <img id="image" className={`w-64 ${previewUrl ? "" : "h-64"}`} src={previewUrl && previewUrl} alt="" />
            {isNotImage && <div className="text-red-500 mb-1">画像を選択してください。</div>}
            {isFileLimit && <div className="text-red-500 mb-1">画像サイズが1000×1000より大きいです。</div>}
            <div className="mt-2">
                <span className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-6 rounded" onClick={() => fileInputRef.current?.click()} >
                    ファイルを選択
                </span>
            </div>
            <div className="flex justify-between text-gray-500">
                <div className="text-red-500 font-bold">
                    {(displayError && !formData.image) && ("画像を選択してください。")}
                </div>
            </div>
            <input accept="image/png" type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
        </div>
    )
}

export default ImgUploader