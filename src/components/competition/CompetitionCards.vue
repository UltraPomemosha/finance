<script lang="ts" setup>
import ULink from "@c/ui/u-link/ULink.vue"
import UTitle from "@c/ui/u-title/UTitle.vue"
import CompetitionCard from "./CompetitionCard.vue"
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
          <li class="text-24">Захватывающий квест.</li>
          <li class="text-24">Интерактивные задания.</li>
          <li class="text-24">Призы и награды.</li>
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
          <li class="text-24">Пройдите квест.</li>
          <li  class="text-24">Ответьте на вопросы.</li>
          <li class="text-24">Получите результаты.</li>
        </ol>
      </template>
    </CompetitionCard>
    <CompetitionCard>
      <template #image>
        <img loading="lazy" src="/src/assets/images/competition-test/start.jpeg" alt="start" />
      </template>
      <template #content>
        <ul>
          <li><p class="text">📅 Когда? 30.08.2024</p></li>
          <li>
            <p class="text">📍 Где?</p>
            &nbsp;
            <ULink type="link" to="/competition/1" class="text clickable-link">Жми сюда</ULink>
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
      color: $primary-color;
      &::marker {
        color: $secondary-color;
      }
    }
  }

  ol.list {
    list-style: inside decimal;
    & > li {
      list-style: inside decimal;
      color: $primary-color;
    }
    ::marker {
      color: #000;
    }
  }

  .text {
    display: inline-block;
    font-family: $secondary-font;

    @extend .text-36;
  }

  .clickable-link {
    display: inline-block;

    color: $secondary-color;
    text-decoration: underline;
  }
}
</style>
