import MessageBoxHeader from "./messageBoxHeader";
import MessageWriteBox from "./messageWriteBox";

export default function MessagesBoxChats()
{
    return(
        <div className="flex-1">
            <MessageBoxHeader/>
            <main className="h-[calc(100%-144px)] p-2">
                Burası henüz yapılmadı
            </main>
            <MessageWriteBox/>
        </div>
    )
}