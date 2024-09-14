import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<Array<ChatMessage>>([]);

  const getItResponse = async () => {
    const response = await fetch('https://yesno.wtf/api');
    const data = (await response.json()) as YesNoResponse;

    return data;
  };

  const onMessage = async (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    if (!text.endsWith('?')) {
      return;
    }

    const { answer, image } = await getItResponse();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    messages,
    onMessage,
  };
};
