export type MessageType = 'info' | 'error' | 'success' | 'warn';

export type ThemeType = 'primary' | 'secondary' | 'success' | 'info' | 'error' | 'warn';

export interface MessageProps {
  text: string;
  type: MessageType
}
