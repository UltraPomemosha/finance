<script lang="ts" setup>
import type { IQuestTableData } from "./support";

interface Props {
  competitionTitle: string
  data: IQuestTableData[]
}
const props = defineProps<Props>()
</script>

<template>
  <table class="quest-table">
    <thead class="quest-table__header">
      <tr class="quest-table__row">
        <th class="quest-table__column-title">Имя</th>
        <th class="quest-table__column-title">Верные ответы</th>
        <th class="quest-table__column-title">Время</th>
      </tr>
    </thead>
    <tbody class="quest-table__body">
      <tr class="quest-table__row" v-for="body in props.data" :key="props.competitionTitle + body.name">
        <td class="quest-table__row-value">{{ body.name }}</td>
        <td class="quest-table__row-value">{{ body.answers.success }} из {{ body.answers.all }}</td>
        <td class="quest-table__row-value">{{ body.finishTime }} секунд</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.quest-table {
  width: 100%;
  margin-top: 10px;
  border: 2px solid $tertiary-color;
  border-collapse: collapse;
  &__row {
    & > * {
      padding: 0 10px;
      border: 1px solid $tertiary-color;
    }
  }
  &__column-title {
    text-align: left;
    @extend .text-24;
    color: $secondary-color;
  }

  &__row-value {
    text-align: left;
    @extend .text-20;
  }
}
</style>
