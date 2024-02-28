type MessagesType = {
  customer: {
    emailAlreadyExists: string;
    invalidEmail: string;
    cpfAlreadyExists: string;
    dateOfBirthInvalid: string;
  };
};





enum ErrorsMessages {}

class MessagesConfig {
  private static instanceIntern: MessagesConfig;
  private language: 'pt-br' | 'en-us' = 'pt-br';

  private _messages: MessagesType;

  static get instance() {
    if (!MessagesConfig.instanceIntern) MessagesConfig.instanceIntern = new MessagesConfig();
    return MessagesConfig.instanceIntern;
  }

  setLanguage(language: 'pt-br' | 'en-us') {
    switch (language) {
      case 'pt-br':
        this._messages = MessagesPtBr;
        break;
      case 'en-us':
        this._messages = MessagesEng;
        break;
      default:
        this._messages = MessagesPtBr;
        break;
    }
  }

  get messages() {
    return this._messages;
  }
}
