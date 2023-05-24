<!-- FIXME: rename this file -->
<script setup lang="ts">
import { GithubUseCase } from '../../domain/github/GithubUseCase'
import GithubComponentsStatus from './GithubComponentsStatus.vue'
import GithubSummaryStatus from './GithubSummaryStatus.vue'

const useCase = new GithubUseCase()
const githubInfo = await useCase.getGithubStatusInfo()
const reloadView = () => {
    window.location.reload()
}
</script>

<template>
    <main>
        <GithubSummaryStatus v-bind:status="githubInfo.status" />
        <div class="status-container">
            <h2>Current status</h2>
            <v-btn icon @click="reloadView" size="26" variant="text">
                <v-icon class="refresh-icon" color="#28a745" icon="mdi-refresh" size="20" />
            </v-btn>
        </div>
        <GithubComponentsStatus v-bind:components="githubInfo.components" />
    </main>
</template>

<style scoped>
.status-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}
h2 {
    margin-right: 10px;
}
</style>
