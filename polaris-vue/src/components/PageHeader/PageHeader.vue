<template>
  <div :class="classes">
    <div v-if="hasBreadcrumbs || pagination" class="Polaris-Page__Navigation">
      <polaris-breadcrumbs v-if="breadcrumbs.length > 0" :breadcrumbs="breadcrumbs"/>
      <div v-if="pagination" class="Polaris-Page__Pagination">
        <polaris-pagination 
          plain
          :has-next="pagination.hasNext"
          :has-previous="pagination.hasPrevious"
          :next-url="pagination.nextURL"
          :previous-url="pagination.previousURL"
        />
      </div>
    </div>
    <template v-if="primaryAction">
      <div class="Polaris-Page__MainContent">
        <div class="Polaris-Page__TitleAndActions">
          <div class="Polaris-Page__Title">
            <polaris-display-text size="large" element="h1">
              {{ title }}
            </polaris-display-text>
          </div>
          <div class="Polaris-Page__Actions">
            <div class="Polaris-Page__PrimaryAction">
              <polaris-button 
                primary
                @click="handleAction(primaryAction, true)"
                :accessibility-label="primaryAction.accessibiltyLabel"
                :url="primaryAction.url"
                :external="primaryAction.external"
                :disabled="primaryAction.disabled"
                :destructive="primaryAction.destructive"
                :icon="primaryAction.icon"
                :loading="primaryAction.loading"
              >
                {{ primaryAction.content }}
              </polaris-button>
            </div>
            <div class="Polaris-Page__SecondaryActions">
              <div v-if="hasRollup" class="Polaris-Page__Rollup">
                <polaris-popover :active="rollupOpen" @close="handleRollupToggle">

                  <template slot="activator">
                    <polaris-button disclosure @click="handleRollupToggle">
                      Actions
                    </polaris-button>
                  </template>

                  <polaris-action-list 
                    :items="secondaryActions"
                    :sections="actionGroupsAsListSections"
                    @action-any-item="handleRollupToggle"
                  />
                </polaris-popover>
              </div>
              <div class="Polaris-Page__IndividualActions">
                <polaris-page-action 
                  v-for="(action, index) in secondaryActions"
                  :key="index"
                  @click="handleAction(action, true)"
                  :accessibility-label="action.accessibiltyLabel"
                  :url="action.url"
                  :external="action.external"
                  :disabled="action.disabled"
                  :destructive="action.destructive"
                  :icon="action.icon"
                  :loading="action.loading"
                >
                  {{ action.content }}
                </polaris-page-action>
                <div v-for="(group, index) in actionGroups" :key="index" class="Polaris-Page__ActionGroup">
                  <polaris-popover :active="group.title === openActionGroup" @close="handleActionGroupClose(group)">
                    <template slot="activator">
                      <polaris-page-action disclosure :icon="group.icon" @action="handleActionGroupOpen(group)">
                        {{ group.title }}
                      </polaris-page-action>
                    </template>
                    <polaris-action-list :items="group.actions" @action-any-item="handleActionGroupClose(group)"/>
                    <div class="Polaris-Page__Details" v-if="group.details">
                      {{ group.details }}
                    </div>
                  </polaris-popover>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Polaris-Page__PrimaryAction">
          <polaris-button 
            primary
            @click="handleAction(primaryAction, true)"
            :accessibility-label="primaryAction.accessibiltyLabel"
            :url="primaryAction.url"
            :external="primaryAction.external"
            :disabled="primaryAction.disabled"
            :destructive="primaryAction.destructive"
            :icon="primaryAction.icon"
            :loading="primaryAction.loading"
          >
            {{ primaryAction.content }}
          </polaris-button>
        </div>
      </div>
    </template>
    <template v-if="!primaryAction">
      <div class="Polaris-Page__Title">
        <polaris-display-text size="large" element="h1">
          {{ title }}
        </polaris-display-text>
      </div>
      <div class="Polaris-Page__Actions">
        <div class="Polaris-Page__SecondaryActions">
          <div v-if="hasRollup"
               class="Polaris-Page__Rollup">
            <polaris-popover :active="rollupOpen" @close="handleRollupToggle">
              <template slot="activator">
                <polaris-button disclosure
                                  @click="handleRollupToggle">
                  Actions
                </polaris-button>
              </template>
              <polaris-action-list 
                :items="secondaryActions"
                :sections="actionGroupsAsListSections"
                @action-any-item="handleRollupToggle"
              />
            </polaris-popover>
          </div>
          <div class="Polaris-Page__IndividualActions">
            <polaris-page-action 
              v-for="(action, index) in secondaryActions"
              :key="index"
              @click="handleAction(action, true)"
              :accessibility-label="action.accessibiltyLabel"
              :url="action.url"
              :external="action.external"
              :disabled="action.disabled"
              :destructive="action.destructive"
              :icon="action.icon"
              :loading="action.loading"
            >
              {{ action.content }}
            </polaris-page-action>

            <div v-for="(group, index) in actionGroups" :key="index" class="Polaris-Page__ActionGroup">
              <polaris-popover :active="group.title === openActionGroup" @close="handleActionGroupClose(group)">

                <template slot="activator">
                  <polaris-page-action disclosure :icon="group.icon" @action="handleActionGroupOpen(group)">
                    {{ group.title }}
                  </polaris-page-action>
                </template>

                <polaris-action-list :items="group.actions" @action-any-item="handleActionGroupClose(group)" />

                <div class="Polaris-Page__Details" v-if="group.details">
                  {{ group.details }}
                </div>
              </polaris-popover>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>


<script src="./PageHeader.js"></script>
