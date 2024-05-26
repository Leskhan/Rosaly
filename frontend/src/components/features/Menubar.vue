<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    label: 'Главная',
    icon: 'pi pi-home',
    command: () => {
      router.push('/');
    }
  },
  {
    label: 'Товары',
    icon: 'pi pi-shopping-bag',
    command: () => {
      router.push('/products');
    }
  },
]);
</script>

<template>
  <div>
    <Menubar :model="items">
      <template #item="{ item, props }">
        <a :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="tw-ml-[10px]">{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </div>
</template>