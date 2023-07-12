import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

enum MessageTypes {
  Assistant = 'assistant',
  Function = 'function',
  System = 'system',
  User = 'user',
}

type ChatMessageProps = {
  abbreviationName: string;
  role?: MessageTypes[number];
  pictureUrl?: string;
  message: string;
  name: string;
};

export const ChatMessage = ({
  role = MessageTypes.Assistant,
  abbreviationName,
  pictureUrl,
  message,
  name,
}: ChatMessageProps) => {
  const isUser = role === MessageTypes.User;

  return (
    <div className=" flex gap-3 text-sm text-slate-600">
      <Avatar>
        {isUser ? (
          <>
            <AvatarFallback>{abbreviationName}</AvatarFallback>
            <AvatarImage src={pictureUrl} />
          </>
        ) : (
          <>
            <AvatarFallback>BOT</AvatarFallback>
            <AvatarImage src="/bot.png" />
          </>
        )}
      </Avatar>

      <p className="leading-relaxed">
        <span className="block font-bold text-slate-800">
          {isUser ? name : 'Bot'}
        </span>
        {message}
      </p>
    </div>
  );
};
