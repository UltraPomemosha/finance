import { UIconEnum } from "../ui/u-icon/support"

export interface ISectionCard {
  title: string
  description: string
  iconName: UIconEnum
}

// constants
export const HOME_SECTION_CARDS: ISectionCard[] = [
  {
    title: "Запуск нового конкурса",
    description: "Прими участие и выиграй стартовый капитал для финансового планирования.",
    iconName: UIconEnum.COMPETITION,
  },
  {
    title: "Обновление образовательных модулей",
    description: "Новые темы для повышения финансовой грамотности.",
    iconName: UIconEnum.LEARNING,
  },
  {
    title: "Рекомендации по инвестициям",
    description: "Как оптимизировать свой виртуальный портфель.",
    iconName: UIconEnum.RECOMMENDATION,
  },
  {
    title: "Советы экспертов",
    description: "Важные финансовые тренды и прогнозы.",
    iconName: UIconEnum.ADVICE,
  },
  {
    title: "Истории успеха",
    description: "Узнай, как другие пользователи строят своё Будущее.",
    iconName: UIconEnum.RUBLE,
  },
]
