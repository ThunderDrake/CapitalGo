import JustValidate from 'just-validate';
import Inputmask from "inputmask";
import GraphModal from 'graph-modal';
import modal from "./modals.js"
import { enableScroll } from '../functions/enable-scroll';

const formCallback = document?.querySelector('.callback__form');
const formModal = document?.querySelector('#modal-form');
const callbackTelSelector = formCallback?.querySelector('input[type="tel"]');
const modalTelSelector = formModal?.querySelector('input[type="tel"]');

const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(callbackTelSelector);
inputMask.mask(modalTelSelector);

const validationCallback = new JustValidate(formCallback);

validationCallback
    .addField('#callback-name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?'
      },
    ])
    .addField('#callback-tel', [
      {
        rule: 'function',
        validator: function() {
          const phone = callbackTelSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите правильный номер телефона'
      },
      {
        rule: 'required',
        errorMessage: 'Номер телефона обязателен'
      }
    ])

validationCallback.onSuccess((ev) => {
  let formData = new FormData(ev.target);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        new GraphModal().open('thankyou');

        setTimeout(() => {
          const modalContainer = document.querySelector('.graph-modal');

          modalContainer.classList.remove('is-open');
          document.body.classList.remove('disable-scroll');
          enableScroll();
        }, 5000)
      }
    }
  }

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  ev.target.reset();
})

const validationModalForm = new JustValidate(formModal);

validationModalForm
    .addField('#client-name-modal', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?'
      },
    ])
    .addField('#client-tel-modal', [
      {
        rule: 'function',
        validator: function() {
          const phone = modalTelSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите правильный номер телефона'
      },
      {
        rule: 'required',
        errorMessage: 'Номер телефона обязателен'
      }
    ])
    .addField('#checkbox-rule-presentation', [
      {
        rule: 'required',
        errorMessage: 'Вы должны согласиться с политикой конфиденциальности'
      },
    ])
    .addRequiredGroup('.form__buttons', 'Выберите метод для связи')

    validationModalForm.onSuccess((ev) => {
  let formData = new FormData(ev.target);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        modal.close();
        new GraphModal().open('thankyou');

        setTimeout(() => {
          modal.close();
        }, 5000)
      }
    }
  }

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  ev.target.reset();
})
