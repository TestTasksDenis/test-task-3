Нужно используя верстку, полученную в первом пункте собрать SPA. Использовать Angular>=v.2+TS, либо React.
Должно быть две страницы - Home(на макете) и Contact (переход при нажатии на ссылку 1).
На странице Home блоки с описанием и изображением хот-догов (область 2) должны загружаться GET-запросом на URL https://formula-test-api.herokuapp.com/menu .

Формат:

{
  id: 1,
  name: 'Name', 
  description: 'Description', 
  expirationDate: '01-30-1999',
  backgroundURL: 'https://..../image.jpg'
}
Полученный с сервера ответ необходимо отфильтровать по expirationDate функцией, полученной в Level2_Javascript, и отрисовать их на странице Home.

На странице Contact должны быть два input "Name" и "Email", textarea "Comment" и кнопка, при клике на которую данные формы отправляются на сервер. Дизайн на усмотрение разработчика. Данные отправлять POST-запросом на URL https://formula-test-api.herokuapp.com/contact в json-формате:

`{`
  `"name": "name",`
  `"email": "email",`
  `"comment": "comment",`
`}`