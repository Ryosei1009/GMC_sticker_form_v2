import React, { useEffect, useState } from 'react'
import EachSticker from './components/EachSticker';

const AdminList = ({ userInfo }) => {
  const token = localStorage.getItem('token') || '';
  const [stickers, setStickers] = useState([]);
  const [code, setCode] = useState("");

  useEffect(() => {
    async function fetchStickers() {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_DOMAIN}/sticker/get/all`, {
          headers: {
            'auth': token,
            'role': userInfo[0].role,
          }
        });
        const data = await response.json();
        setStickers(data);
        setCode(
          `{
        category = '1',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 1)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '2',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 2)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '3',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 3)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '4',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 4)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '5',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 5)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '6',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 6)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '7',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 7)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '8',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 8)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '9',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 9)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '10',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 10)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '11',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 11)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '12',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 12)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '13',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 13)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '14',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 14)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '15',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 15)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '16',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 16)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '17',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 17)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '18',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 18)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '19',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 19)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '20',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 20)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '21',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 21)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '22',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 22)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '23',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 23)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '24',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 24)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '25',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 25)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '26',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 26)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '27',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 27)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '28',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 28)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '29',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 29)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '30',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 30)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '31',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 31)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '32',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 32)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '33',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 33)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '34',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 34)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '35',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 35)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '36',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 36)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '37',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 37)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '38',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 38)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '39',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 39)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '40',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 40)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '41',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 41)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '42',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 42)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '43',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 43)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '44',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 44)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '45',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 45)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '46',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 46)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '47',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 47)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '48',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 48)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '49',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 49)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },
    {
        category = '50',
        stickers = {`
          +
          data
            .filter((sticker) => sticker.is_cancel === 0 && sticker.is_add === 1 && sticker.category === 50)
            .reverse()
            .map((sticker) => `
            { name = '${sticker.name}', price = 0, flip = false, dict = 'gmc${sticker.category}' },`)
            .join("")
            +
          `
        },
    },`
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchStickers();
  }, [token, userInfo])

  const handleDownloadImages = async (category) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_DOMAIN}/sticker/download`, {
        headers: {
          'auth': token,
          'category': category,
        }
      });

      if (!response.ok) {
        throw new Error('ダウンロードに失敗しました');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'stickers.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  const [category, setCategory] = useState(0);

  return (
    <>
      <div className="flex justify-center mx-3">
        <div className="max-w-full w-full my-16 mx-4">
          <div className="mt-3 mb-16 flex justify-between items-center">
            <div className="flex flex-col">
              <input type="number" className="w-12" value={category} onChange={(event) => setCategory(event.target.value)} />
              <div
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-lg cursor-pointer"
                onClick={() => handleDownloadImages(category)}
              >
                zipファイルダウンロード
              </div>
            </div>
            <CopyButton code={code} />
          </div>
          <div className="text-center text-3xl font-bold">
            運営用申請済みステッカー
          </div>
          <div className="text-center mb-8">
            キャンセル → コピーとダウンロード → 追加
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {stickers.map((sticker) => (
              <EachSticker sticker={sticker} key={sticker.id} token={token} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminList

export const CopyButton = ({ code }) => {
  const [copyStatus, setCopyStatus] = useState('Copy');

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus('Copy'), 2000);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
        setCopyStatus('Failed to copy');
      });
  };

  return (
    <button
      onClick={() => handleCopy(`${code}`)}
      className="py-2 px-8 cursor-pointer bg-[#4CAF50] text-white rounded-md"
    >
      {copyStatus}
    </button>
  )
}