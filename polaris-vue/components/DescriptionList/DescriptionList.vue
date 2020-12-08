<template>
  <dl class="Polaris-DescriptionList">
    <template v-for="(item, index) in items">
      <dt :key="index+'Term'" class="Polaris-DescriptionList__Term">
        {{ item.term }}
      </dt>
      <dd :key="index+'Description'" class="Polaris-DescriptionList__Description">
        {{ item.description }}
      </dd>
    </template>
  </dl>
</template>

<script src="./DescriptionList.js"></script>
<style lang="scss" src="./DescriptionList.scss"></style>
