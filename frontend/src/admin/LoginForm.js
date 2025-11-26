import { useState } from "react"
import axios from "axios"
import ActionPerfect from "../utils/ActionPerfect"
import { useNavigate } from "react-router-dom";

export default function Component({ setToken }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [isPerfect, setIsPerfect] = useState(false)
    const [perfectText, setPerfectText] = useState("")

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/account/login`, {
                username,
                password,
            });
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            setIsPerfect(true);
            setPerfectText("ログインに成功しました。");
        } catch (error) {
            console.error(error);
            setIsError(true);
            setErrorText("ログインに失敗しました。");
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-[86vh]">
                <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-xl">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="username">ユーザーネーム</label>
                            </div>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password">パスワード</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                        </div>

                        <button
                            className={`w-full py-2 text-white bg-accent rounded-md ${loading ? "bg-accent cursor-default" : "hover:bg-[#1ab0ed]"}`}
                        >
                            {loading ? "・・・・" : "ログイン"}
                        </button>
                    </form>
                </div>
            </div>
            <ActionPerfect
                Perfect={isPerfect}
                onClose={() => {
                    setIsPerfect(false)
                    setLoading(false)
                    navigate("/admin/list", { replace: true });
                }}
                title={"Perfect"}
                text={perfectText}
            />
            <ActionPerfect
                Perfect={isError}
                onClose={() => {
                    setIsError(false)
                    setLoading(false)
                }}
                title={"Error"}
                text={errorText}
            />
        </>
    )
}
