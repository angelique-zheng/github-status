<script setup lang="ts">
import type { GithubComponent } from '../../domain/github/GithubComponent'

defineProps<{
    component: GithubComponent
}>()
</script>

<template>
    <div class="component-item-container">
        <div class="name-container">
            <div class="name-help-container">
                <h4 class="name">{{ component.name }}</h4>
                <v-tooltip v-if="component.description" location="top">
                    <template v-slot:activator="{ props }"
                        ><v-icon
                            v-bind="props"
                            class="summary-icon"
                            color="grey"
                            icon="mdi-help-circle-outline"
                            size="20"
                        />
                    </template>
                    <span>{{ component.description }}</span>
                </v-tooltip>
            </div>
            <v-icon class="summary-icon" color="#28a745" icon="mdi-check-circle" size="26" />
        </div>
        <p class="status">{{ component.status }}</p>
    </div>
</template>

<style scoped>
.component-item-container {
    border: 1px solid grey;
    padding: 10px 20px;
    border-bottom: none;
}
.component-item-container:nth-last-child(1) {
    border-bottom: 1px solid grey;
}

@media (min-width: 900px) {
    .component-item-container:nth-child(odd) {
        border-right: none;
    }
    .component-item-container:nth-last-child(-n + 2) {
        border-bottom: 1px solid grey;
    }
}

.name-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.name-help-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.name {
    margin: 4px 4px 8px 0px;
}

.status {
    text-transform: capitalize;
}
</style>
