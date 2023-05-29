<script setup lang="ts">
import { Props } from './interface'
defineProps<Props>()
</script>

<template>
	<h1>{{ msg }}</h1>
	<a-button type="primary">我是组件库 自动导入的按钮</a-button>
</template>
