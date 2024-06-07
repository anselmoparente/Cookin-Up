<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingredient: { type: String, required: true }
    },
    data() {
        return {
            selected: false
        }
    }
}
</script>

<template>
    <button class="ingrediente" @:click="selected = !selected" :aria-pressed="selected">
        <Tag :text="ingredient" :is-active="selected" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>