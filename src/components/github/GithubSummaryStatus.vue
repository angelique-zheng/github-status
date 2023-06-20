<script setup lang="ts">
import type { GithubStatus } from '../../domain/github/GithubStatus'

defineProps<{
    status: GithubStatus
}>()
const icons = {
    none: 'mdi-check',
    minor: 'mdi-information-variant-circle-outline',
    major: 'mdi-alert-outline',
    critical: 'mdi-close-circle-outline'
}
</script>

<template>
    <div v-bind:class="'summary-container summary-' + status.indicator">
        <v-icon
            class="summary-icon"
            color="white"
            v-bind:icon="icons[status.indicator]"
            size="30"
        />
        <h2>{{ status.description }}</h2>
    </div>
</template>

<style scoped>
.summary-container {
    height: auto;
    display: flex;
    flex-direction: 'row';
    background-color: #28a745;
    color: white;
    align-items: center;
    margin: 16px 24px;
    padding: 10px 0px 10px 16px;
    border-radius: 6px;
}

.summary-none {
    background-color: #28a745;
}

.summary-minor {
    background-color: #1976d2;
}

.summary-major {
    background-color: #e18801;
}

.summary-critical {
    background-color: #c30000;
}

.summary-icon {
    margin-right: 10px;
}
</style>
