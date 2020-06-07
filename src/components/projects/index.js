// images

import Todo from "./../../img/Todoist.PNG";
import Weather from "./../../img/WeatherApp.PNG";
import News from "./../../img/NewsApp.PNG";
import Calendar from "./../../img/CalendarApp.PNG";
import Tilda from "./../../img/TildaApp.PNG";
import Shop from "./../../img/SimpleShop.PNG";

// icons

import { ReactIcon, VueIcon, JsIcon, HTMLIcon } from "./../common/Icons";

export default [
  {
    title: "Todo app",
    id: "todo",
    subtitle: "Todoist copy. Organize your todos.",
    shortDesc: "Копия Todoist. Группируйте ваши задачи.",
    ref: `https://stupefied-joliot-fa4fba.netlify.com/`,
    img: Todo,
    github: "https://github.com/meltmestnt/netlify-todoist",
    icons: [ReactIcon],
    primeColor: "#ff3f34",
    rusDesc: `Создавайте, организуйте свои задачи по дате, определенному проекту или метке.
    Вы можете создать задачу на определенную дату или прикрепить ее к проекту с меткой. Также задавайте задачам приоритет и группируйте задачи по нему!`,
    description: `Create, organize your tasks by date, project or mark.
       You can create a task on specific date or attach to project or mark; also you can set priority and group tasks by priority!`,
  },
  {
    title: "Weather app",
    id: "weather",
    subtitle: "Check out week weather forecast!",
    shortDesc: "Просмотрите прогноз погоды на неделю!",
    ref: `https://bakurov-weather-app.netlify.com/`,
    github: "https://github.com/meltmestnt/portfolio",
    img: Weather,
    icons: [ReactIcon],
    primeColor: "#0fbcf9",
    rusDesc: `Просмотрите прогноз погоды на 5 дней и отдельно для каждого дня. Вы можете просмотреть прогноз погоды по вашему местоположению или найти прогноз на интересующую вас локацию.`,
    description:
      "Have forecast for next 5 days and for each day individually. You can see forecast for your location or search it up for any other location you want!",
  },
  {
    title: "Simple shop",
    id: "shop",
    subtitle: "Simple shop. Filter items then checkout!",
    shortDesc: "Простой онлайн магазин. Фильтруйте вещи и оформляйте заказ!",
    ref: `https://laughing-cori-16556a.netlify.com/`,
    img: Shop,
    github: "https://github.com/meltmestnt/netlify-simple-shop",
    icons: [ReactIcon],
    primeColor: "#485460",
    rusDesc: `Простой онлайн магазин с ассортиментом одежды, которую вы можете фильтровать по цене, названию, полу, доступности в магазине. Добавляйте продукт в корзину и оформляйте покупку! `,
    description:
      "Simple eCommerce app with some clothing stuff that you can filter by keyword, price, sale, sex, availability in store. Add product to cart, checkout and you're good to go!",
  },
  {
    title: "News app",
    id: "news",
    subtitle: "Look for local news or search it up with keywords.",
    shortDesc:
      "Просматривайте местные новости или используйте поиск глобально.",
    ref: `https://sleepy-curran-3b2aac.netlify.com/`,
    img: News,
    github: "https://github.com/meltmestnt/netlify-news-app",
    icons: [VueIcon],
    primeColor: "#ffc048",
    rusDesc: `Просматривайте главные новости вашей страны или воспользуйтесь поиском на интересующие вас темы.`,
    description: "Look for news in your country or search it up with keyword.",
  },
  {
    title: "Calendar",
    id: "calendar",
    subtitle: "Functional calendar. Create and organize events.",
    shortDesc:
      "Многофункциональный календарь. Создавайте и группируйте события.",
    ref: `https://dazzling-poitras-a89f6f.netlify.com/`,
    img: Calendar,
    github: "https://github.com/meltmestnt/netlify-vue-calendar",
    icons: [VueIcon],
    primeColor: "#3c40c6",
    rusDesc: `Создавайте важные события на конкретные даты, сортируйте и настраивайте каждое событие как вам угодно.`,
    description:
      "Create events on specific date, organize, sort and customize them whatever you like",
  },
  {
    title: "Tilda landing page",
    id: "tilda",
    subtitle: "Tilda landing page copy.",
    shortDesc: "Копия основной страницы Tilda.",
    ref: `https://quizzical-cray-d636e5.netlify.com/`,
    img: Tilda,
    github: "https://github.com/meltmestnt/netlify-landing-page-tilda",
    icons: [JsIcon],
    primeColor: "#ffc048",
    rusDesc: `Копия основной страницы Tilda.`,
    description: "Tilda landing page copy.",
  },
];
