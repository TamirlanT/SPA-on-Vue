<template>
    <div class="banner"><img class="banner__img" src="../assets/ProjectDetails/banner.jpg" alt="mainBanner"></div>

    <div class="main">
        <div class="content center">
            <h2 class="header__content">
                <p>Minimal Look Bedrooms</p>
            </h2>
            <p class="header__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam
                sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi
                fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                <br>
                <br>
                In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis
                quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis
                convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus
                porttitor.
            </p>
        </div>
    </div>
    <SwiperProps />
</template>
  
<script>

import SwiperProps from '../components/Swiper.vue';

export default {
    name: 'ProjectDetails',

    components: {
        SwiperProps
    },
}
</script>
  
<style>
.banner {
    padding-bottom: 40px;
    width: 100%;
    flex-shrink: 0;
}

.banner__img {
    width: 100%;
}

.main {
    display: flex;
    justify-content: center;
}

.content {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    width: 638px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    gap: 11px;
    padding-bottom: 100px;
}

.header__content {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.header__text {
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