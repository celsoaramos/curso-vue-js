<template>
    <div class="citacao">
        
        <slot></slot><!-- autor -->
        <slot name="texto"></slot>
        
        <div class="fonte">
            <slot name="fonte"></slot>
        </div>
    </div>
</template>

<script>
export default {
   
    created() {
        console.log('created')
    },
    destroyed() {
        console.log('destroyed')
    },
    activated() {
        console.log('activated')
    },
    destroyed() {
        console.log('destroyed')
    }


}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .fonte {
        float: right;
    }
</style>
