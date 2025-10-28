export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  lastMessageAt: string | null;
}

export interface PageInfo {
  nextCursor: string | null;
  prevCursor: string | null;
}

export interface ConversationWithMessages {
  id: string;
  title: string;
  messages: Message[];
  pageInfo: PageInfo;
}

export interface SendResponse {
  message: Message;
  reply: Message;
}