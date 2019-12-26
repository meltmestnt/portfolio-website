// images

import Todo from "./../../img/Todoist.PNG";
import Weather from "./../../img/WeatherApp.PNG";
import News from "./../../img/NewsApp.PNG";
import Calendar from "./../../img/CalendarApp.PNG";
import Tilda from "./../../img/TildaApp.PNG";
import Shop from "./../../img/SimpleShop.PNG";

// icons

import { ReactIcon } from "./../containers/Modal";
import { VueIcon } from "./../containers/Modal";
import { HTMLIcon } from "./../containers/Modal";
import { JsIcon } from "./../containers/Modal";

export default [
  {
    title: "Todo app",
    id: "todo",
    subtitle: "Todoist copy. Organize your todos.",
    ref: `https://stupefied-joliot-fa4fba.netlify.com/`,
    img: Todo,
    github: "https://github.com/meltmestnt/netlify-todoist",
    icons: [ReactIcon],
    primeColor: "#ff3f34",
    description:
      "Create, organize your tasks by date, project or mark. You can create a task on specific date or attach to project or mark; also you can set priority and group tasks by priority!"
  },
  {
    title: "Weather app",
    id: "weather",
    subtitle: "Check out week weather forecast!",
    ref: `https://bakurov-weather-app.netlify.com/`,
    github: "https://github.com/meltmestnt/portfolio",
    img: Weather,
    icons: [ReactIcon],
    primeColor: "#0fbcf9",
    description:
      "Have forecast for next 5 days and for each day individually. You can see forecast for your location or search it up for any other location you want!"
  },
  {
    title: "Simple shop",
    id: "shop",
    subtitle: "Simple shop. Filter items and checkout!",
    ref: `https://laughing-cori-16556a.netlify.com/`,
    img: Shop,
    github: "https://github.com/meltmestnt/netlify-simple-shop",
    icons: [ReactIcon],
    primeColor: "#485460",
    description:
      "Simple eCommerce app with some clothing stuff that you can filter by keyword, price, sale, sex, availability in store. Add product to cart, checkout and you're good to go!"
  },
  {
    title: "News app",
    id: "news",
    subtitle: "Look for local news or search it up with keywords.",
    ref: `https://sleepy-curran-3b2aac.netlify.com/`,
    img: News,
    github: "https://github.com/meltmestnt/netlify-news-app",
    icons: [VueIcon],
    primeColor: "#ffc048",
    description: "Look for news in your country or search it up with keyword."
  },
  {
    title: "Calendar",
    id: "calendar",
    subtitle: "Functional calendar. Create and organize events.",
    ref: `https://dazzling-poitras-a89f6f.netlify.com/`,
    img: Calendar,
    github: "https://github.com/meltmestnt/netlify-vue-calendar",
    icons: [VueIcon],
    primeColor: "#3c40c6",
    description:
      "Create events on specific date, organize, sort and customize them whatever you like"
  },
  {
    title: "Tilda landing page",
    id: "tilda",
    subtitle: "Tilda landing page copy.",
    ref: `https://quizzical-cray-d636e5.netlify.com/`,
    img: Tilda,
    github: "https://github.com/meltmestnt/netlify-landing-page-tilda",
    icons: [JsIcon],
    primeColor: "#ffc048",
    description: "Tilda landing page copy."
  }
];
