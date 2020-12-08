<template>
  <optional-tag tag="li" :active="hasMultipleSections">
    <div :class="classes">
      <p v-if="section.title" class="Polaris-ActionList__Title">
        {{ section.title }}
      </p>
      <ul class="Polaris-ActionList__Actions">
        <polaris-action-list-item v-for="(item, index) in section.items"
                                  :key="index"
                                  :content="item.content"
                                  :action="wrapAction(item)"/>
      </ul>
    </div>
  </optional-tag>
</template>


<script src="./ActionListSection.js"></script>
