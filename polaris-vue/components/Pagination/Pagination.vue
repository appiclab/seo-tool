<template>
  <nav :class="classes" :aria-label="accessibilityLabel || 'Pagination'">
    <polaris-unstyled-link v-if="previousURL"
                             class="Polaris-Pagination__Button"
                             :url="previousURL"
                             @mouseup="handleMouseUp"
                             aria-label="Previous">
      <polaris-icon :source="arrowLeft"/>
    </polaris-unstyled-link>
    <polaris-button v-if="!previousURL"
                      class="Polaris-Pagination__Button"
                      @click="onPrevious"
                      @mouseup="handleMouseUp"
                      :disabled="!hasPrevious">
      <polaris-icon :source="arrowLeft"/>
    </polaris-button>

    <polaris-unstyled-link v-if="nextURL"
                             class="Polaris-Pagination__Button"
                             :url="nextURL"
                             @mouseup="handleMouseUp"
                             aria-label="Next">
      <polaris-icon :source="arrowRight"/>
    </polaris-unstyled-link>
    <polaris-button v-if="!nextURL"
                      class="Polaris-Pagination__Button"
                      @click="onNext"
                      @mouseup="handleMouseUp"
                      :disabled="!hasNext">
      <polaris-icon :source="arrowRight"/>
    </polaris-button>
  </nav>
</template>

<script src="./Pagination.js"></script>
<style lang="scss" src="./Pagination.scss"></style>
