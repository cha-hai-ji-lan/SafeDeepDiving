<template>
    <div class="select-bar">
        <div class="select-frame" @click="change_stste">
            <div class="select-contain">
                {{  }}
            </div>
            <div class="arrow">
                <ToolIcon Type="arrow"></ToolIcon>
            </div>
        </div>
        <div v-show="open_option" class="option" :class="{'selected':focus_item === option.key }"
        v-for="option in Options" :key="option.key"
        @click="focus_item(option.key)">
            {{ option.value }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ToolIcon from '../../icons/ToolIcon.vue';
const open_option = ref<boolean>(false)
const focus_value = ref<string>("")

defineProps({
    Options:{
        type: Object
    },
    Placeholder: {
        type: String,
        default: "",
    }
})
const change_stste = () => {
    open_option.value = !open_option.value
}
const focus_item = (item_name:string) => {
    focus_value.value = item_name
}
</script>
<style scoped></style>