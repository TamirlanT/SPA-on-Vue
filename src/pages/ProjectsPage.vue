<template>
    <div class="tags center">
        <div class="banner">
            <img src="../assets/Projects/Banner.jpg" alt="banner">
            <div class="banner__box ">
                <h2 class="banner__title">Our Project</h2>
                <nav class="banner__links">
                    <router-link class="header__link" to="/">Home</router-link>/
                    <router-link class="header__link" to="/projects">Project</router-link>
                </nav>
            </div>
        </div>
        <div class="changeButtons">
            <button class="changeButton" v-for="button in buttons" :key="button.id" @click="currentTab = button">
                {{ button }}
            </button>
        </div>

    </div>
    <component :is="changeTabs"></component>
</template>

<script>
import Badroom from '../components/BadRoom.vue';
import Bathroom from '../components/BathRoom.vue';


export default {
    name: 'ProjectsPage',
    components: {
        Badroom,
        Bathroom
    },
    data() {
        return {
            buttons: ['Bathroom', 'Badroom'],
            currentTab: 'Bathroom'
        };
    },
    computed: {
        changeTabs() {
            return `${this.currentTab}`;
        }
    },

}
</script>

<style scoped>
.tags {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    padding-top: 20px;
}

.changeButton {
    border-radius: 18px;
    background: #CDA274;
    display: flex;
    padding: 26px 66px;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.changeButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.banner {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
}

.banner__box {
    position: absolute;
    margin: auto;
    display: flex;
    width: 504px;
    padding: 41px 125px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    display: flex;
    width: 254px;
    flex-direction: column;
    align-items: center;

    bottom: 0%;
    border-radius: 37px 37px 0px 0px;
    background: #FFF;
}
</style>