export interface IQuestion {
  title: string
  variants: string[]
  description: string
  rightVariant: string
}

export interface IQuestState {
  [key: string]: string
}

// constants
export const QUESTIONS: IQuestion[] = [
  {
    title: "Какой из этих инструментов лучше всего подходит для краткосрочных сбережений?",
    variants: ["Инвестиционный фонд", "Сберегательный счет", "Пенсионный план"],
    description:
      "Сберегательный счет обычно предоставляет лучшую ликвидность и безопасность для краткосрочных сбережений.",
    rightVariant: "Сберегательный счет",
  },
  {
    title: 'Что такое "диверсификация" в инвестициях?',
    variants: [
      "Вложение всех средств в один актив",
      "Вложение денег в разные активы для снижения риска",
      "Инвестирование только в акции",
    ],
    description: "Диверсификация помогает распределить риск, инвестируя в различные активы.",
    rightVariant: "Вложение денег в разные активы для снижения риска",
  },
  {
    title: "Какой фактор наиболее важен при выборе кредитной карты?",
    variants: ["Процентная ставка", "Дизайн карты", "Количество рекламных предложений"],
    description: "Процентная ставка определяет стоимость кредитования.",
    rightVariant: "Процентная ставка",
  },
  {
    title: 'Что такое "бюджетирование"?',
    variants: [
      "Способ накопления денег в банке",
      "Планирование доходов и расходов для контроля финансов",
      "Покупка акций и облигаций",
    ],
    description: "Бюджетирование помогает отслеживать и контролировать свои финансовые потоки.",
    rightVariant: "Планирование доходов и расходов для контроля финансов",
  },
  {
    title: "Какой из следующих расходов является переменным?",
    variants: ["Аренда квартиры", "Счета за коммунальные услуги", "Расходы на развлечения"],
    description: "Переменные расходы могут меняться каждый месяц, в отличие от фиксированных расходов.",
    rightVariant: "Расходы на развлечения",
  },
  {
    title: "Что лучше всего подходит для долгосрочных инвестиций?",
    variants: ["Сберегательный счет", "Пенсионный накопительный фонд “Будущее”", "Краткосрочные кредиты"],
    description: "Этим Вы обеспечите себе достойную пенсию.",
    rightVariant: "Пенсионный накопительный фонд “Будущее”",
  },
  {
    title: 'Какую основную цель преследует негосударственный пенсионный фонд "Будущее"?',
    variants: [
      "Обеспечение финансовой стабильности на пенсии за счет долгосрочных накоплений",
      "Инвестирование только в акции крупных компаний",
      "Предоставление краткосрочных займов для работающих граждан",
    ],
    description: `Негосударственный пенсионный фонд "Будущее" фокусируется на том, чтобы обеспечить своим клиентам финансовую 
      стабильность в пенсионном возрасте через грамотное управление долгосрочными пенсионными накоплениями.`,
    rightVariant: "Обеспечение финансовой стабильности на пенсии за счет долгосрочных накоплений",
  },
  {
    title:
      'Какие преимущества предлагает негосударственный пенсионный фонд "Будущее" по сравнению с государственной пенсией?',
    variants: [
      "Более гибкие условия накоплений и возможность выбора инвестиционной стратегии",
      "Более высокая ставка по кредитам",
      "Бесплатные консультации по любым финансовым вопросам",
    ],
    description: `НПФ "Будущее" предоставляет своим клиентам возможность выбора инвестиционной 
      стратегии и более гибкие условия накоплений, что позволяет лучше адаптировать пенсионные сбережения к индивидуальным целям.`,
    rightVariant: "Более гибкие условия накоплений и возможность выбора инвестиционной стратегии",
  },
  {
    title: 'Какие шаги нужно предпринять для открытия пенсионного счета в НПФ "Будущее"?',
    variants: [
      'Посетить офис НПФ "Будущее" и подписать договор или оформить онлайн через сайт',
      'Получить одобрение на кредит от НПФ "Будущее"',
      "Пройти медицинское обследование",
    ],
    description: `Открытие пенсионного счета в НПФ "Будущее"
      требует подписания договора, что можно сделать как в офисе фонда, так и онлайн через официальный сайт.`,
    rightVariant: 'Посетить офис НПФ "Будущее" и подписать договор или оформить онлайн через сайт',
  },
]

// functions
export const getSuccessAnswersAmount = (questions: IQuestion[], state: IQuestState): number => {
  let res = 0
  for (const question of questions) {
    if (question.rightVariant === state[question.title]) res++
  }
  return res
}
