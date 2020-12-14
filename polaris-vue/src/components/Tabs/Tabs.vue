<template>
  <div>
    <div class="Polaris-Tabs__Wrapper">
      <ul class="Polaris-Tabs" role="tablist">
        <template v-for="(name, index) in tabNames">
          <li class="Polaris-Tabs__TabContainer" role="presentation" :key="index">
            <button
              role="tab"
              @click="activeTab = name"
              :tabindex="activeTab === name ? 0 : -1"
              :class="{
                'Polaris-Tabs__Tab': true,
                'Polaris-Tabs__Tab--selected': activeTab === name
              }"
            >
              <span class="Polaris-Tabs__Title">{{ name }}</span>
            </button>
          </li>
        </template>
      </ul>
    </div>
    
    <template v-for="(name, index) in tabNames">
      <div class="Polaris-Tabs__Panel" v-if="name === activeTab" :key="index">
        <slot :name="name" />
      </div>
    </template>
  </div>
</template>

<script src="./Tabs.js"></script>
<style lang="scss" src="./Tabs.scss"></style>
