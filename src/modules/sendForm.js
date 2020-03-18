// Валидация форм
let bodyTag = document.querySelector('body');
bodyTag.addEventListener('input', (event) => {
    event.preventDefault();
    let target = event.target;
    target.value = target.value.replace(/[a-z]/gi,'');
    if (target.matches('input[name="user_phone"]')) {
        target.value = target.value.replace(/[^\+\d]/g, '');
    } else if (target.matches('input[name="user_name"]') || target.matches('input[name="user_message"]')) {
      target.value = target.value.replace(/[a-z]/gi,'');
    } else if (target.matches('input[name="user_email"]')) {
        target.value = target.value.replace(/[а-яА-Я]/gi, '');
    }
  });

  const postData = (body) => {
      return fetch('./server.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
      });
  };

//Отправка форм
const sendForm = () => {
  const loadMessage = 'Загрузка...';
  let bodyTag = document.querySelector('body');
  let allInputs = document.querySelectorAll('input');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem';

  bodyTag.addEventListener('submit', (event) => {
      event.preventDefault();
      let target = event.target;
      let successMessage = () => {
          statusMessage.textContent = 'Данные успешно отправлены!';

          allInputs.forEach((item) => {
              item.value = '';
          });
      };

      const formData = new FormData(target);
      let body = {};
      formData.forEach((val, key) => {
          body[key] = val;
      });

      let errorMessage = () => {
          statusMessage.textContent = 'Что-то пошло не так...';
          console.error("Что-то пошло ...");
      };

      if (target.matches('form')) {
          statusMessage.textContent = loadMessage;
          statusMessage.style.color = 'black';
          target.appendChild(statusMessage);
      }

      postData(body)
      .then((response) => {
              if (response.status !== 200) {
                  throw new Error('Network status is not 200');
              }
              successMessage();
          })
          .catch(errorMessage);

});
};


export default sendForm; 