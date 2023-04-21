const translations = {
  ru: {
    getInTouch: "Связаться",
    install: "Установить",
    findSchedule: "Найти расписание...",
    recents: "Недавние",
    navigation: "Навигация",
    select: "Выбрать",
    quit: "Закрыть",
  },
  en: {
    getInTouch: "Get In Touch",
    install: "Install",
    findSchedule: "Search for schedule...",
    recents: "Recents",
    navigation: "To navigate",
    select: "To select",
    quit: "To quit",
  },
};

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export type TranslationKeys = KeysMatching<(typeof translations)["en"], string>;

export default translations;
