<template>
  <RelativeOverlay position="above">
    <template #overlay v-if="editionStore.editable">
      <div class="full-width column items-center tw-pt-2">
        <q-btn
          v-if="editionStore.editable"
          @click="redirectToNewExperienceModal"
          color="positive"
        >
          Add Experience
        </q-btn>
      </div>
    </template>
    <template #foreground>
      <div v-if="experiences" class="tw-w-full">
        <q-list class="container">
          <div v-for="(experience, index) in experiences" :key="index">
            <RelativeOverlay position="outside-top-right">
              <template #overlay v-if="editionStore.editable">
                <div class="tw-mx-4 tw-flex tw-w-[15vw] tw-flex-col tw-gap-4">
                  <q-btn
                    :to="['experience', experience.slug].join('/')"
                    color="positive"
                  >
                    Edit experience
                  </q-btn>
                  <q-btn
                    @click="onDeleteExperience(experience.slug)"
                    color="negative"
                  >
                    Delete experience
                  </q-btn>
                </div>
              </template>
              <template #foreground>
                <ExperienceElement :experience="experience"></ExperienceElement>
              </template>
            </RelativeOverlay>
          </div>
        </q-list>
      </div>
    </template>
  </RelativeOverlay>
</template>

<script setup lang="ts">
import { useEditionStore } from 'src/stores/edition';
import { useExperiences } from '../../experience/composables';
import { useQuasar } from 'quasar';
import NewExperienceModal from 'src/modules/experience/components/NewExperienceModal.vue';
import RelativeOverlay from 'src/modules/UI/components/RelativeOverlay.vue';
import DeleteExperienceModal from 'src/modules/experience/components/DeleteExperienceModal.vue';
import ExperienceElement from '../../experience/components/ExperienceElement.vue';

const $ = useQuasar();
const { data: experiences, refetch } = useExperiences();
const editionStore = useEditionStore();
const redirectToNewExperienceModal = () => {
  $.dialog({
    component: NewExperienceModal,
    componentProps: {},
  }).onOk(async () => await refetch());
};

const onDeleteExperience = async (experience_slug: string) => {
  $.dialog({
    component: DeleteExperienceModal,
    componentProps: { experience_slug: experience_slug },
  }).onOk(() => {
    refetch();
  });
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .container {
    margin-bottom: 1rem;
  }
}
</style>
