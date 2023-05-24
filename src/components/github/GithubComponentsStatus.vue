<script setup lang="ts">
import type { GithubComponent } from '../../domain/github/GithubComponent'
import GithubComponentItemStatus from './GithubComponentItemStatus.vue'

defineProps<{
    components: GithubComponent[]
}>()
</script>

<template>
    <div class="components-container">
        <GithubComponentItemStatus v-for="component in components" v-bind:component="component" />
    </div>
</template>

<style scoped>
.components-container {
    max-width: 1200;
    margin: 0 auto;
    display: grid;
}

@media (min-width: 900px) {
    .components-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
