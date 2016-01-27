module.exports = {
  build: {
    canReceive: ['screen'],
    blocks: [
      {
        type: 'screen',
        name: 'form',
        build: {
          canReceive: ['popup', 'ribbon'],
          maxLength: 1,
          blocks: [
            {
              type: 'popup',
              background: ['#2a2c2b', '#2a2c2b'],
              borderRadius: 3,
              build: {
                canReceive: ['header', 'text', 'form', 'links'],
                blocks: [
                  {
                    type: 'header',
                    align: 'center',
                    content: 'Время грандиозных скидок!',
                    color: '#ffffff'
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
                    background: ['#f46b3f', '#df371b'],
                    borderRadius: 3,
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
                                placeholder: 'Имя, сестра!',
                                borderRadius: 3
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
                                placeholder: 'Электропочта',
                                borderRadius: 3
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
                          size: 'normal',
                          color: '#ffffff',
                          background: '#a4312c',
                          borderWidth: 0,
                          borderColor: '#000000',
                          borderRadius: 3
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
                                action: ['to-screen', 'agreement'],
                                color: '#ffffff'
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
        type: 'screen',
        name: 'agreement',
        build: {
          canReceive: ['popup', 'ribbon'],
          maxLength: 1,
          blocks: [
            {
              type: 'popup',
              background: ['#2a2c2b', '#2a2c2b'],
              borderRadius: 3,
              build: {
                canReceive: ['header', 'text', 'form', 'links'],
                blocks: [
                  {
                    type: 'header',
                    align: 'center',
                    content: 'Внимательно прочтите',
                    color: '#ffffff'
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
                    size: 'normal',
                    color: '#ffffff',
                    background: '#4c4c47',
                    borderWidth: 0,
                    borderColor: '#000000',
                    borderRadius: 3
                  }
                ]
              }
            }
          ]
        }
      },
      {
        type: 'screen',
        name: 'success',
        build: {
          canReceive: ['popup', 'ribbon'],
          maxLength: 1,
          blocks: [
            {
              type: 'popup',
              background: ['#2a2c2b', '#2a2c2b'],
              borderRadius: 3,
              build: {
                canReceive: ['header', 'text', 'form', 'links'],
                blocks: [
                  {
                    type: 'header',
                    align: 'center',
                    content: 'Спасибо!',
                    color: '#ffffff'
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
                    size: 'normal',
                    color: '#ffffff',
                    background: '#4c4c47',
                    borderWidth: 0,
                    borderColor: '#000000',
                    borderRadius: 3
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },

  // Новые блоки
  blocks: {
    header: {
      type: 'header',
      align: 'center',
      content: '',
      color: '#ffffff'
    },
    text:
    {
      type: 'text',
      content: '',
      size: 'normal',
      align: 'center',
      color: '#ffffff'
    },
    links: {
      type: 'links',
      align: 'center',
      build: {
        canReceive: ['link'],
        blocks: []
      }
    },
    link: {
      type: 'link',
      content: '',
      action: ['to-screen', 'agreement'],
      color: '#ffffff'
    },
    form: {
      type: 'form',
      formType: 'login',
      background: ['#f46b3f', '#df371b'],
      borderRadius: 3,
      build: {
        canReceive: ['text', 'field', 'button', 'links'],
        blocks: []
      }
    },
    popup: {
      type: 'popup',
      background: ['#2a2c2b', '#2a2c2b'],
      borderRadius: 3,
      build: {
        canReceive: ['header', 'text', 'form', 'links'],
        blocks: []
      }
    },
    field: {
      type: 'field',
      build: {
        canReceive: ['input', 'checkbox', 'text'],
        blocks: []
      }
    },
    input: {
      type: 'input',
      name: '',
      placeholder: '',
      borderRadius: 3
    },
    button: {
      type: 'button',
      content: '',
      action: ['close'],
      size: 'normal',
      color: '#ffffff',
      background: '#4c4c47',
      borderWidth: 0,
      borderColor: '#000000',
      borderRadius: 3
    },
    screen: {
      type: 'screen',
      name: 'new-screen',
      build: {
        canReceive: ['popup', 'ribbon'],
        maxLength: 1,
        blocks: []
      }
    }
  }
};
