'use client';

import { useChat } from 'ai/react';

import { ChatMessage } from './chat-message';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';

const user = {
  pictureUrl: 'https://github.com/ribeirogab.png',
  name: 'Gabriel Ribeiro',
  abbreviationName: 'GR',
};

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="grid h-[700px] w-[440px] grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chatbot.</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {messages.map((message) => (
          <ChatMessage
            abbreviationName={user.abbreviationName}
            pictureUrl={user.pictureUrl}
            message={message.content}
            role={message.role}
            key={message.id}
            name={user.name}
          />
        ))}
      </CardContent>

      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
};
