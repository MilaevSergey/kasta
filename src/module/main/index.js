import React, { useState } from 'react';
import { ScMain } from './styled';

import { ReactComponent as Logo } from '../../img/mk-logo.svg';
import { ReactComponent as CardIcon } from '../../img/card-icon.svg';
import PciDssIcon from '../../img/dss-logo.svg';
import VisaSecureIcon from '../../img/visa-logo.svg';
import MastercardSecureIcon from '../../img/mastercard-logo.svg';

import FooterIcon from '../../img/castapayfooter.png';
import CheckIcon from '../../img/check.png';

import { Input, InputCheckBox } from '../../components/input';
import { Button } from '../../components/button';

export const Main = () => {
  let stateInit = {
    isInputCardValid: true,
    isInputDateValid: true,
    isInputCardHolderValid: true,
    isInputCvvValid: true,
    inputCardValue: '',
    inputDateValue: '',
    inputCardHolderValue: '',
    inputCvvValue: '',
    inputCheckboxSaveCard: false,
    isShowModalSubmitDone: false,
  };

  const [stateDefault, setStateDefault] = useState(stateInit);

  const validateInput = (value) => {
    return value.length > 0;
  };

  const validInputHandler = (id, value) => {
    switch (id) {
      case 0:
        setStateDefault({
          ...stateDefault,
          isInputCardValid: validateInput(value),
          inputCardValue: value,
        });
        break;
      case 1:
        setStateDefault({
          ...stateDefault,
          isInputDateValid: validateInput(value),
          inputDateValue: value,
        });
        break;
      case 2:
        setStateDefault({
          ...stateDefault,
          isInputCardHolderValid: validateInput(value),
          inputCardHolderValue: value,
        });
        break;
      case 3:
        setStateDefault({
          ...stateDefault,
          isInputCvvValid: validateInput(value),
          inputCvvValue: value,
        });
        break;

      default:
        return;
    }
  };

  const checkboxHandler = () => {
    setStateDefault({
      ...stateDefault,
      inputCheckboxSaveCard: !stateDefault.inputCheckboxSaveCard,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let dataSend = {};

    if (
      validateInput(stateDefault.inputCardValue) &&
      validateInput(stateDefault.inputDateValue) &&
      validateInput(stateDefault.inputCardHolderValue) &&
      validateInput(stateDefault.inputCvvValue)
    ) {
      dataSend = {
        card: stateDefault.inputCardValue,
        date: stateDefault.inputDateValue,
        cardHolder: stateDefault.inputCardHolderValue,
        cvv: stateDefault.inputCvvValue,
        saveCard: stateDefault.inputCheckboxSaveCard,
      };
      setStateDefault({ ...stateDefault, isShowModalSubmitDone: true });
      console.log(dataSend);
    } else {
      setStateDefault({
        ...stateDefault,
        isInputCardValid: validateInput(stateDefault.inputCardValue),
        isInputDateValid: validateInput(stateDefault.inputDateValue),
        isInputCardHolderValid: validateInput(
          stateDefault.inputCardHolderValue
        ),
        isInputCvvValid: validateInput(stateDefault.inputCvvValue),
      });
    }
  };

  return (
    <ScMain>
      <div>
        <Logo />

        <div>
          <p>До оплати</p>

          <p>123 284 грн</p>
        </div>
      </div>

      <div>
        <form>
          <div>
            <div>
              <p>Нова картка</p>
              <p>Visa, Mastercard</p>
            </div>

            <CardIcon />
          </div>

          <div>
            <div>
              <Input
                id="0"
                key="0"
                title="Номер картки"
                type="text"
                name="cardNumber"
                placeholder="#### #### #### ####"
                errorText="Невірна картка"
                isValid={stateDefault.isInputCardValid}
                validHandler={validInputHandler}
              />

              <Input
                id="1"
                key="1"
                title="Термін дії"
                type="text"
                name="cardDate"
                placeholder="ММ / РР"
                errorText="Невірний термін"
                isValid={stateDefault.isInputDateValid}
                validHandler={validInputHandler}
              />
            </div>

            <div>
              <Input
                id="2"
                key="2"
                title="Власник картки"
                name="cardHolder"
                type="text"
                tooltip="Фамілія і ім'я людини на яке випущена карта. Для іменних карт - нанесенно на карту"
                placeholder="CARDHOLDER NAME"
                errorText="Введіть ПІБ власника картки"
                isValid={stateDefault.isInputCardHolderValid}
                validHandler={validInputHandler}
              />

              <Input
                id="3"
                key="3"
                title="CVV"
                name="cardCvv"
                type="text"
                tooltip="Введіть код, який розташованний на картці"
                placeholder="XXX"
                errorText="Введіть CVV"
                isValid={stateDefault.isInputCvvValid}
                validHandler={validInputHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <InputCheckBox
                title="Запам'ятати цю картку"
                type="checkbox"
                name="cardSave"
                tooltip="Зберегти данні карти, для використання наступного разу"
                stateHandler={{
                  stateDefault,
                  setStateDefault,
                  checkboxHandler,
                }}
              />
            </div>

            <div>
              <Button
                text="Оплатити 123 284 грн"
                clickHandler={submitHandler}
              />
            </div>

            <div>на виконання платежу 00:12:35</div>
          </div>
          {stateDefault.isShowModalSubmitDone && (
            <p>
              <img src={CheckIcon} alt="" />
              <span>Оплата прошла успешно</span>
            </p>
          )}
        </form>
      </div>

      <div>
        <img src={PciDssIcon} alt="img-secure" />
        <img src={VisaSecureIcon} alt="img-secure" />
        <img src={MastercardSecureIcon} alt="img-secure" />
      </div>

      <div>
        <img src={FooterIcon} al="" />
      </div>
    </ScMain>
  );
};
