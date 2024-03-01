import { MessagesEng } from './en';
import { MessagesPtBr } from './ptbr';

export type MessagesType = {
  customer: {
    emailAlreadyExists: string;
    invalidEmail: string;
    cpfAlreadyExists: string;
    dateOfBirthInvalid: string;
    phoneAlreadyExists: string;
    emailAlreadyConfirmed: string;
  };
};

export class MessagesConfig {
  private static instanceIntern: MessagesConfig;

  private _messages: MessagesType = MessagesPtBr;

  static get instance() {
    if (!MessagesConfig.instanceIntern)
      MessagesConfig.instanceIntern = new MessagesConfig();
    return MessagesConfig.instanceIntern;
  }

  setLanguage(language: 'pt-br' | 'en-us') {
    switch (language) {
      case 'pt-br':
        MessagesConfig.instanceIntern._messages = MessagesPtBr;
        break;
      case 'en-us':
        MessagesConfig.instanceIntern._messages = MessagesEng;

        break;
      default:
        MessagesConfig.instanceIntern._messages = MessagesPtBr;
        break;
    }
  }

  get messages() {
    return MessagesConfig.instanceIntern._messages;
  }
}
