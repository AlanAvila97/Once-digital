<template>
    <main id="wrapper" class="bg-home index">
        <section class="pt-md-70 section-slider-head">
            <div class="container-slider-head">
                <div data-aos="fade-down">
                    <div>
                        <div v-if="$viewport.isLessThan('tablet')">Should render only on mobile</div>
                        <div v-else>Current breakpoint: {{ $viewport.breakpoint }}</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
    import { useNuxtApp } from '#app'
    const { $viewport } = useNuxtApp()

    watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
        console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
    })
</script>
<style lang="scss" scoped>

</style>