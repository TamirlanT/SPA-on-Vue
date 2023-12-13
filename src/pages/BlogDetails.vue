<template>
    <div>
        <div class="tagbanner">
            <img src="../assets/BlogDetails/Photo.jpg" alt="banner">
        </div>

        <div class="tagcontent center">
            <component :is="changeTabs">
            </component>

            <div class="blogtags">
                <h2 class="tag__title">Tags</h2>
                <div class="tag__buttons">
                    <button class="tag__button" @click="currentTab = nameButton" v-for="nameButton in nameButtons"
                        :key="nameButton.id">
                        {{ nameButton }}
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import TagKitchen from '@/components/TagKitchen.vue'
import TagBadroom from '@/components/TagBadroom.vue'
import TagArchitecture from '@/components/TagArchitecture.vue'
import TagBathroom from '@/components/TagBathroom.vue'
import TagBuilding from '@/components/TagBuilding.vue'
import TagKitchenPlanning from '@/components/TagKitchenplanning.vue'

export default {
    name: 'BlogDeatails',
    components: {
        TagKitchen,
        TagBadroom,
        TagArchitecture,
        TagBathroom,
        TagBuilding,
        TagKitchenPlanning

    },

    data() {
        return {
            nameButtons: ['Kitchen', 'Badroom', 'Building', 'Architecture', 'Kitchen-Planning', 'Bathroom'],
            currentTab: 'Kitchen',
        };
    },
    computed: {
        changeTabs() {
            return `Tag${this.currentTab}`
        }
    },
};
</script>

<style lang="css" >
.tagbanner {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
}



.tag__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    padding-bottom: 24px;

}

.tag__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

}

.tag__button {
    padding: 9px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #F4F0EC;

    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.tagcontent__link:not(:last-child):after {
    content: '  /';
}


.tagcontent {
    /* position: relative; */
    display: grid;
    grid-template-columns: 799px 346px;
    gap: 52px;
    flex-direction: column;
    padding-top: 120px;
    align-items: start;
}

.tagcontent__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    padding-bottom: 11px;
}

.tagcontent__image {
    padding-bottom: 26px;
    border-radius: 50px;
    background: #C4C4C4;
    background-repeat: no-repeat;
    background-size: cover;
    width: 799px;
    height: 539px;
    flex-shrink: 0;

}

.tagcontent__info {
    display: flex;
    justify-content: space-between;
    padding-top: 46px;
}

.tagcontent__date {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.tagcontent__link {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;

}

.tagcontent__decription {
    margin-top: 48px;
}

.tagcontent__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}
</style>