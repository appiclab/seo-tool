<template>
  <div>
    <polaris-layout>
      <polaris-layout-section secondary>
        <polaris-card
          title="Select what meta data on what pages you are ready to delete."
          style="background-color: transparent; box-shadow: none;"
        >
          <polaris-card-section style="padding-bottom: 0;">
            <polaris-list type="number">
              <polaris-list-item>Select the page type</polaris-list-item>
              <polaris-list-item>Fill the meta fields for the chosen page type</polaris-list-item>
              <polaris-list-item>Use the tags below. Place the cursor in the required place and click on the required tag to insert its value into the meta field.</polaris-list-item>
            </polaris-list>
          </polaris-card-section>
        </polaris-card>
      </polaris-layout-section>
      <polaris-layout-section>
        <polaris-card sectioned>
          <polaris-form-layout>
            <polaris-form-layout-group title="Select the page type(s) where the meta tags will be deleted">
              <polaris-stack wrap distribution="fillEvenly">
                <polaris-choice-list v-model="choiceValues[0]" :choices="choices[0]" allowMultiple />
                <polaris-choice-list v-model="choiceValues[1]" :choices="choices[1]" allowMultiple />
              </polaris-stack>
            </polaris-form-layout-group>
            <polaris-form-layout-group title="Select the meta tags that will be deleted">
              <polaris-stack wrap distribution="fillEvenly">
                <polaris-choice-list v-model="choiceValues[2]" :choices="choices[2]" allowMultiple />
                <polaris-choice-list v-model="choiceValues[3]" :choices="choices[3]" allowMultiple />
              </polaris-stack>
            </polaris-form-layout-group>
          </polaris-form-layout>
        </polaris-card>
        <polaris-page-actions :primary-action="{ content: 'Save', onAction: onSave }" />
      </polaris-layout-section>
    </polaris-layout>

    <polaris-modal v-model="show" :closeOnLayout="false">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem ea eius in, itaque laudantium magni, nam numquam odit optio quisquam quo, suscipit voluptates! Assumenda inventore magni tenetur unde voluptate.</p>
    </polaris-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Delete Meta Tags",
    show: false,
    tags: [
      "Store name",
      "Customer email",
      "Store phone",
      "Street",
      "Apartment, suite, etc",
      "City",
      "Postal / ZIP code",
      "State",
      "Country/Region"
    ],
    choiceValues: [[], [], [], []],
    choices: [
      [
        { label: 'Home page', value: 'hidden' },
        { label: 'Collection pages', value: 'optional' },
        { label: 'Product pages', value: 'required' }
      ],
      [
        { label: 'Informational pages', value: 'hidden' },
        { label: 'Blog page', value: 'optional' },
        { label: 'Articule pages', value: 'required' }
      ],
      [
        { label: 'Meta title', value: 'hidden' },
        { label: 'Meta description', value: 'optional' }
      ],
      [
        { label: 'Meta keywords', value: 'hidden' },
        { label: 'Alt-text', value: 'optional' }
      ]
    ]
  }),
  methods: {
    onClick(value) {
      console.log(value);
    },
    onSave() {
      this.show = true;
      console.log('onSave');
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped></style>
