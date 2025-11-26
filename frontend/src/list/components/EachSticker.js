import { Dialog, DialogPanel } from '@headlessui/react';
import React, { useState } from 'react'
import { TimeFormat } from '../../utils/TimeUtil';
import axios from 'axios';

const EachSticker = ({ sticker, userUuids = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const isAdd = sticker.is_add;
    const [isCancel, setIsCancel] = useState(sticker.is_cancel);
    const isOwner = userUuids.includes(sticker.unique_code);
    const handleCancel = async () => {
        try {
            setIsCancel(1);
            await axios.post(`${process.env.REACT_APP_API_DOMAIN}/sticker_v2/cancel`, {}, {
                headers: {
                    uuid: sticker.unique_code
                }
            });
        } catch (error) {
            setIsCancel(false);
            console.error('Error uploading data:', error);
        }
    }

    return (
        <>
            <div className="flex justify-center" onClick={() => {
                setIsOpen(true);
            }}>
                <div className="w-72 bg-white rounded-lg shadow-md m-4 relative pt-2 pb-1 flex flex-col justify-between border-accent border-4 hover:bg-gray-300 cursor-pointer hover:border-purple-500">
                    <div className="flex flex-col items-center">
                        <div className="text-center text-lg font-bold">{sticker.category}&emsp;{sticker.name}</div>
                        <div className="flex justify-center h-60 w-60">
                            <img src={`${process.env.REACT_APP_API_DOMAIN}/${sticker.image}`} alt={sticker.name} className="object-contain p-2 rounded-lg w-full h-full" loading="lazy" />
                        </div>
                        {isAdd === 1 &&
                            <div className="text-end w-full px-2 text-green-400 font-bold">
                                追加済み
                            </div>
                        }
                        {isCancel === 1 &&
                            <div className="text-end w-full px-2 text-red-600 font-bold">
                                キャンセル済み
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition className="relative z-50 transition duration-200 ease-out data-[closed]:opacity-0">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-md:w-[80vh] max-lg:p-4 border-accent rounded-xl space-y-4 border-4 bg-white px-8 pt-8 pb-2">
                        <div className='flex flex-col justify-center'>
                            <div className='flex pb-2'>
                                <div className='max-md:text-xl text-blue-600 font-bold text-2xl '>
                                    {sticker.id}
                                </div>
                                <div className='w-full px-16 text-black text-3xl flex-grow text-center font-bold'>{sticker.name}</div>
                            </div>
                            <div className='bg-black/5 max-md:h-[32vh] h-[65vh] flex '>
                                <img className='flex-grow object-contain' src={`${process.env.REACT_APP_API_DOMAIN}/${sticker.image}`} alt="" />
                            </div>
                            <div className='items-center pt-2 flex justify-between'>
                                {(isCancel === 0 && isAdd === 0 && isOwner) && (
                                    <button onClick={() => handleCancel()} className='bg-red-500 p-3 rounded-2xl font-bold text-white hover:bg-red-600 hover:transition-colors duration-200 hover:cursor-pointer'>
                                        キャンセル
                                    </button>
                                )}
                                {isAdd === 1 &&
                                    <div className="text-green-400 font-bold">
                                        追加済み
                                    </div>
                                }
                                {isCancel === 1 &&
                                    <div className="text-red-600 font-bold">
                                        キャンセル済み
                                    </div>
                                }
                                <div className='text-black text-xl'>
                                    {TimeFormat(sticker.created_at, "yy/MM/dd HH:mm")}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default EachSticker