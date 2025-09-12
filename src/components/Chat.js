import { INITIAL_LOGO } from '../utils/constants'

const Chat = ({ name, message }) => {
    return (
        <div className=" hover:bg-gray-100 flex rounded-lg mb-1 py-1 space-x-1">
            <div className="pl-2 pt-2">
                <img className="w-6 rounded-3xl mr-4" alt="initial-logo" src={INITIAL_LOGO} />
            </div>
            <div>
                <h1 className="font-bold text-gray-500 text-sm">{name}</h1>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    )
}

export default Chat