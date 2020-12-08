<template>
  <div aria-hidden class="Polaris-TextField__Resizer">
    <div ref="dummyInput" class="Polaris-TextField__DummyInput" v-html="finalContents" />
    <div v-if="minimumLines" class="Polaris-TextField__DummyInput" v-html="minimumLinesContent"/>
    {{minimumLinesContent}}
  </div>
</template>

<script src="./TextFieldResizer.js"></script>
