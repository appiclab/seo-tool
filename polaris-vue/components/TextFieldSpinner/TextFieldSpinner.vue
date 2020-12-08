<template>
  <div class="Polaris-TextField__Spinner"
       @click="onClick"
       aria-hidden>
    <div role="button"
         class="Polaris-TextField__Segment"
         tabindex="-1"
         @click="handleStep(1)">
      <div class="Polaris-TextField__SpinnerIcon">
        <polaris-icon :source="caretUp"/>
      </div>
    </div>
    <div role="button"
         class="Polaris-TextField__Segment"
         tabindex="-1"
         @click="handleStep(-1)">
      <div class="Polaris-TextField__SpinnerIcon">
        <polaris-icon :source="caretDown"/>
      </div>
    </div>
  </div>
</template>

<script src="./TextFieldSpinner.js"></script>
