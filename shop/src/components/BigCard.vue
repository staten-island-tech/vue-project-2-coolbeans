<template>
    <div class="card">
        <div class="background">
            <div class="content">
                <img class="left" src="../components/icons/left.svg" alt="left-arrow">
                <div class="container">
                    <p>hello</p>
                </div>
                <img class="right" src="../components/icons/right.svg" alt="right-arrow">
            </div>
            <img class="close" src="../components/icons/close.svg" alt="close">
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
    position: fixed;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 9;

}
.background {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    }
.container {
    position: relative;
    width: 82%;
    height: 90%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.close {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
</style>