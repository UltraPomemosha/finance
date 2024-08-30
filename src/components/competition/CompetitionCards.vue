<script lang="ts" setup>
import { tag } from "@/utils/tag";
import ULink from "@c/ui/u-link/ULink.vue";
import UText from "@c/ui/u-text/UText.vue";
import UTitle from "@c/ui/u-title/UTitle.vue";
import CompetitionCard from "./CompetitionCard.vue";
</script>

<template>
  <div class="competition-cards">
    <CompetitionCard>
      <template #image>
        <img loading="lazy" src="/src/assets/images/competition-test/waiting.jpeg" alt="waiting" />
      </template>
      <template #content>
        <UTitle tag="h2">Что Вас ждет?</UTitle>
        <ul class="list">
          <UText :tag="tag('li')" :config="{ size: 24 }">Захватывающий квест.</UText>
          <UText :tag="tag('li')" :config="{ size: 24 }">Интерактивные задания.</UText>
          <UText :tag="tag('li')" :config="{ size: 24 }">Призы и награды.</UText>
        </ul>
      </template>
    </CompetitionCard>
    <CompetitionCard>
      <template #image>
        <img loading="lazy" src="/src/assets/images/competition-test/how-to-join.jpeg" alt="How to join" />
      </template>
      <template #content>
        <UTitle tag="h2">Как участвовать?</UTitle>
        <ol class="list">
          <UText :tag="tag('li')" :config="{ size: 24 }">Пройдите квест.</UText>
          <UText :tag="tag('li')" :config="{ size: 24 }">Ответьте на вопросы.</UText>
          <UText :tag="tag('li')" :config="{ size: 24 }">Получите результаты.</UText>
        </ol>
      </template>
    </CompetitionCard>
    <CompetitionCard>
      <template #image>
        <img loading="lazy" src="/src/assets/images/competition-test/start.jpeg" alt="start" />
      </template>
      <template #content>
        <ul>
          <li><UText :tag="tag('p')" :config="{ size: 36 }" class="text">📅 Когда? 30.08.2024 </UText></li>
          <li>
            <UText :tag="tag('p')" :config="{ size: 36 }" class="text">📍 Где?</UText>
            &nbsp;
            <ULink type="link" :title-config="{ size: 36 }" to="/competition/1" class="text clickable-link">Жми сюда</ULink>
          </li>
        </ul>
      </template>
    </CompetitionCard>
  </div>
</template>

<style lang="scss" scoped>
.competition-cards {
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;

  .list {
    li:first-child {
      margin-top: 20px;
    }
  }

  ul.list {
    list-style: disc inside;
    & > li {
      list-style: disc inside;
      &::marker {
        color: $secondary-color;
      }
    }
  }

  ol.list {
    list-style: inside decimal;
    & > li {
      list-style: inside decimal;
    }
  }

  .text {
    display: inline-block;
    font-family: $secondary-font;
  }

  .clickable-link {
    display: inline-block;
    &:deep(span) {
      color: $secondary-color;
      text-decoration: underline;
    }
  }
}
</style>
