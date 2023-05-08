import { MessageContainer, MessageText } from "./styles";

interface MessageProps {
  text: string;
  type: "success" | "error";
}

export default function Message({ text, type }: MessageProps) {
  return (
    <MessageContainer type={type}>
      <MessageText>{text}</MessageText>
    </MessageContainer>
  );
}
