<template>
    <div class="card">
        <div class="background">
            <div class="container">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    components: {

    }
}
</script>

<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 2;

}
.background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.container {
    width: 80%;
    height: 90%;
    background-color: #fff;
}
</style>