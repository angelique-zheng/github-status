<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue'
import GithubStatusComponent from '../components/github/GithubSystemSuccess.vue'

const error = ref()
onErrorCaptured((err) => {
    error.value = err.message
})
</script>

<template>
    <p v-if="error">{{ error }}</p>
    <Suspense v-else>
        <GithubStatusComponent />

        <template #fallback>
            <v-progress-circular indeterminate color="#00bd7e" size="40" />
        </template>
    </Suspense>
</template>
