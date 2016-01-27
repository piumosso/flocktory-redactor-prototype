module.exports = {
  build: {
    canReceive: ['state'],
    blocks: [
      {
        type: 'state',
        name: 'form',
        build: {
          canReceive: ['popup', 'ribbon'],
          maxLength: 1,
          blocks: [
            {
              type: 'popup',
              background: ['#0563e6', '#1b8cac'],
              borderRadius: 0,
              build: {
                canReceive: ['header', 'text', 'form', 'links'],
                blocks: [
                  {
                    type: 'header',
                    content: 'Время грандиозных скидок!'
                  },
                  {
                    type: 'text',
                    content: 'Подпишись на еженедельную рассылку с самыми актуальными распродажами и новыми коллекциями',
                    size: 'normal',
                    align: 'center',
                    color: '#ffffff'
                  },
                  {
                    type: 'form',
                    formType: 'login',
                    build: {
                      canReceive: ['text', 'field', 'button', 'links'],
                      blocks: [
                        {
                          type: 'text',
                          content: 'Оставьте нам свое имя и e-mail',
                          size: 'normal',
                          align: 'center',
                          color: '#ffffff'
                        },
                        {
                          type: 'field',
                          build: {
                            canReceive: ['input', 'checkbox', 'text'],
                            blocks: [
                              {
                                type: 'input',
                                name: 'name',
                                placeholder: 'Имя, сестра!'
                              }
                            ]
                          }
                        },
                        {
                          type: 'field',
                          build: {
                            canReceive: ['input', 'checkbox', 'text'],
                            blocks: [
                              {
                                type: 'input',
                                name: 'email',
                                placeholder: 'Электропочта'
                              }
                            ]
                          }
                        },
                        {
                          type: 'text',
                          content: 'Нажимая кнопку «Отправить», я выражаю свое согласие на получение рекламных материалов и обработку моих персональных данных',
                          size: 'small',
                          align: 'center',
                          color: '#ffffff'
                        },
                        {
                          type: 'button',
                          content: 'Отправить скидку на почту',
                          action: ['submit'],
                          color: '#ffffff',
                          background: '#092f7c'
                        },
                        {
                          type: 'links',
                          align: 'center',
                          build: {
                            canReceive: ['link'],
                            blocks: [
                              {
                                type: 'link',
                                content: 'Пользовательское соглашение',
                                action: ['to-screen', 'agreement']
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        type: 'state',
        name: 'agreement',
        build: {
          canReceive: ['popup', 'ribbon'],
          maxLength: 1,
          blocks: [
            {
              type: 'popup',
              background: ['#0563e6', '#1b8cac'],
              borderRadius: 0,
              build: {
                canReceive: ['header', 'text', 'form', 'links'],
                blocks: [
                  {
                    type: 'header',
                    content: 'Внимательно прочтите'
                  },
                  {
                    type: 'text',
                    content: 'Текст пользовательского соглашения',
                    size: 'normal',
                    align: 'center',
                    color: '#ffffff'
                  },
                  {
                    type: 'button',
                    content: 'Вернуться к баранам',
                    action: ['to-screen', 'form'],
                    color: '#ffffff',
                    background: '#092f7c'
                  }
                ]
              }
            }
          ]
        }
      },
      {
        type: 'state',
        name: 'success',
        build: {
          canReceive: ['popup', 'ribbon'],
          maxLength: 1,
          blocks: [
            {
              type: 'popup',
              background: ['#0563e6', '#1b8cac'],
              borderRadius: 0,
              build: {
                canReceive: ['header', 'text', 'form', 'links'],
                blocks: [
                  {
                    type: 'header',
                    content: 'Спасибо!'
                  },
                  {
                    type: 'text',
                    content: 'Мы внесли Вас в список рассылки',
                    size: 'normal',
                    align: 'center',
                    color: '#ffffff'
                  },
                  {
                    type: 'button',
                    content: 'Закрыть',
                    action: ['close'],
                    color: '#ffffff',
                    background: '#092f7c'
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
};
