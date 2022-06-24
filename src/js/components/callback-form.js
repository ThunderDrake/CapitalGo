import { validateForms } from '../functions/validate-forms';
const rules = [
  {
    ruleSelector: '.callback-form__input--name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите корректное имя!'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.callback-form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.callback__form', rules, afterForm);
