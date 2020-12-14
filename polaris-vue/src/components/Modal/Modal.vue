<template>
  <div>
    <div
      ref="modal"
      id="ProductModal"
      role="dialog"
      class="modal fade"
      :class="{ 'show': show }"
      :style="{ 'display': show ? 'block' : 'none' }"
    >
      <div role="document" class="modal-dialog">
        <div class="modal-content">
          <polaris-card-section>
            <polaris-stack alignment="center" distribution="equalSpacing">
              Header
              <button type="button" class="modal-btn" @click="closeModal">
                <polaris-icon source="cancel" color="skyDark"></polaris-icon>
              </button>
            </polaris-stack>
          </polaris-card-section>
          <polaris-card-section>
            <slot/>
          </polaris-card-section>
          <polaris-card-section>Footer</polaris-card-section>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" :class="{ 'show': show }"></div>
  </div>
</template>

<script src="./Modal.js"></script>
<style lang="scss" src="./Modal.scss"></style>
