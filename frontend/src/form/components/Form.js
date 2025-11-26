import axios from 'axios';
import React, { useState } from 'react'
import ImgUploader from './ImgUploader';
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ setIsUpload500Error, setIsUpload502Error, setIsUploadPerfect }) => {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const [displayError, setDisplayError] = useState(false);
    const handleUpload = async () => {
        setDisplayError(true);
        if (formData.name === "") {
            window.scrollTo({ top: document.getElementById("name").getBoundingClientRect().top + window.scrollY, behavior: "smooth" })
            return
        }
        if (formData.image === "") {
            window.scrollTo({ top: document.getElementById("image").getBoundingClientRect().top + window.scrollY, behavior: "smooth" })
            return
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/sticker_v2/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const existArray = localStorage.getItem("uuid");
            if (existArray) {
                try {
                    const uuidArray = JSON.parse(existArray);
                    localStorage.setItem('uuid', JSON.stringify(uuidArray.concat(response.data)));
                } catch (error) {
                    console.error("Invalid JSON in localStorage:", existArray);
                    localStorage.removeItem("uuid");
                }
            } else {
                const uuidArray = [response.data];
                localStorage.setItem('uuid', JSON.stringify(uuidArray));
            }

            setIsUploadPerfect(true);
            setIsUpload500Error(false);
            setIsUpload502Error(false);
        } catch (error) {
            console.error('Error uploading data:', error);
            if (error.response) {
                if (error.response.status === 500) {
                    setIsUploadPerfect(false);
                    setIsUpload500Error(true);
                    setIsUpload502Error(false);
                }
                if (error.response.status === 502) {
                    setIsUploadPerfect(false);
                    setIsUpload500Error(false);
                    setIsUpload502Error(true);
                }
            }
        }
    }
    const [token, setToken] = useState(null);

    const handleCaptchaChange = (value) => {
        setToken(value);
    };
    return (
        <div className="flex justify-center mx-3">
            <div className="max-w-2xl w-full mb-16">
                <div className="relative flex flex-col mt-12 bg-white px-6 pt-6 pb-3 rounded-md border-red-500 border-4">
                    <label className="text-lg font-bold">
                        【禁止画像】
                    </label>
                    ・公序良俗に反する画像<br />
                    ・著作権侵害に該当する画像<br />
                    ・他者を貶める可能性のある画像<br />
                    ・GMC RP外の個人を宣伝する画像等<br />
                    ・既に申請済みの画像<br />
                    ・背景透過がされていない画像<br />
                    ※運営の判断で却下する場合もあります。<br />
                    ・拡張子が大文字の画像(.pngではなく.PNG)<br />
                </div>
                <div className="relative flex flex-col mt-4 bg-white px-6 pt-6 pb-3 rounded-md border-yellow-500 border-4">
                    <label className="text-lg font-bold">
                        【注意点】
                    </label>
                    ・ステッカーは誰でも使用できます。<br />
                    ・一度キャンセルすると取り消しはできなくなります。<br />
                    ・追加された後削除するにはチケットから申請する必要があります。<br />
                    ※削除申請を出す場合は、ステッカー名を記載してください。<br />
                    ・サイトのキャッシュを削除してしまうと申請のキャンセルはできなくなります。<br />
                    ・ステッカーの追加は一ヶ月に一回程度の頻度で行われます。<br />
                    ・追加済みであるのにサーバーへ追加されていない場合は次のサーバー再起動までお待ち下さい。(それでも追加されていない場合は報告お願いします。)<br />
                </div>
                <div className="relative flex flex-col mt-12 bg-white px-6 pt-6 pb-3 rounded-md border-gray-300 border-1" id='name'>
                    <label className="text-lg">
                        ステッカー名<span className="text-red-500"> *</span>
                    </label>
                    <div className="text-gray-500 text-sm">すでに存在している名前の場合は申請時にエラーが表示されます。<br />入力可能な文字は小文字のアルファベットと数字、アンダーバーのみです。(abc.. 123.. _)</div>
                    <input
                        className="border-b-2 border-b-gray-200 focus:outline-none"
                        onChange={handleChange}
                        value={formData.name}
                        type="text"
                        id="name"
                        name="name"
                        maxLength={15}
                        placeholder="gmc_rp1"
                        onInput={(event) => {
                            event.target.value = event.target.value.replace(/[^a-z0-9_]/g, '');
                        }}
                    />
                    <div className="flex justify-between text-gray-500">
                        <div className="text-red-500 font-bold">
                            {(displayError && !formData.name) && ("ステッカー名を入力してください。")}
                        </div>
                        <div>
                            {formData.name.length}/15
                        </div>
                    </div>
                </div>
                <ImgUploader setFormData={setFormData} displayError={displayError} formData={formData} />
                <ReCAPTCHA
                    className="mt-3"
                    sitekey="6LdjSdIqAAAAANXjx3UYKzTmDGqFhizfTue45CGe"
                    onChange={handleCaptchaChange}
                />
                {token &&
                    <button
                        className="mt-3 mb-16 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-lg"
                        onClick={(event) => {
                            event.preventDefault();
                            handleUpload();
                        }}>
                        送信
                    </button>
                }
            </div>
        </div>
    )
}

export default Form