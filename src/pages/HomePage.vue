<template>
    <div class="banner center">
        <div class="banner__intro">
            <div class="banner__content">
                <h1 class="banner__title">Let Your Home
                    Be Unique</h1>
                <p class="banner__text">There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.</p>
                <nav>
                    <router-link to="/projectDetails">
                        <button class="banner__button"><span class="button__text">Get started</span></button>
                    </router-link>
                </nav>
            </div>

        </div>
    </div>
    <div class="project center">
        <div class="project__heading">
            <h3 class="heading__title">Follow Our Projects</h3>
            <p class="heading__text">It is a long established fact that a reader will be distracted by the of readable
                content of page lookings at its layouts points.</p>
        </div>
        <div class="project__models">
            <div class="project__model">
                <img src="../assets/HomePage/project_1.png" alt="project_1">
                <div class="project__icon">
                    <p class="project__title">Modern Kitchan</p>
                    <p class="project__discription">Decor / Artchitecture</p>
                    <router-link to="/404">
                        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                            fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>

            <div class="project__model">
                <img style="border-top-left-radius: 15%;" src="../assets/HomePage/project_2.png" alt="project_2">
                <div class="project__icon">
                    <p class="project__title">Modern Kitchan</p>
                    <p class="project__discription">Decor / Artchitecture</p>
                    <router-link to="/404">
                        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                            fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="project__model">
                <img style="border-bottom-right-radius: 15%;" src="../assets/HomePage/project_3.png" alt="project_3">
                <div class="project__icon">
                    <p class="project__title">Modern Kitchan</p>
                    <p class="project__discription">Decor / Artchitecture</p>
                    <router-link to="/404">
                        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                            fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>

            <div class="project__model">
                <img style="border-bottom-left-radius: 15%;" src="../assets/HomePage/project_4.png" alt="project_4">
                <div class="project__icon">
                    <p class="project__title">Modern Kitchan</p>
                    <p class="project__discription">Decor / Artchitecture</p>
                    <router-link to="/404">
                        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                            fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="counter center">
        <div class="counter__years">
            <p class="counter__numbers">12</p>
            <p class="counter__text">Years Of Experiance</p>
        </div>
        <div class="counter__line"><img src="../assets/HomePage/Line.png" alt=""></div>
        <div class="counter__projects">
            <p class="counter__numbers">85</p>
            <p class="counter__text">Success Project</p>
        </div>
        <div class="counter__line"><img src="../assets/HomePage/Line.png" alt=""></div>
        <div class="counter__active">
            <p class="counter__numbers">15</p>
            <p class="counter__text">Active Project</p>
        </div>
        <div class="counter__line"><img src="../assets/HomePage/Line.png" alt=""></div>
        <div class="counter__customers">
            <p class="counter__numbers">95</p>
            <p class="counter__text">Happy Customers</p>
        </div>
    </div>
    <div class="blog center">
        <div class="blog__heading">
            <h3 class="blog__title">Articles & News</h3>
            <p class="blog__text">It is a long established fact that a reader will be distracted by the of readable
                content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div class="blog__content">
            <div class="blog__cart">
                <div class="blog_img">
                    <img style="width: 340px; border-radius: 15% 15% 0 0;" src="../assets/HomePage/kitchen_design.png"
                        alt="Kitchen Design">
                    <p class="img__text">Kitchen Design</p>
                </div>
                <h3 class="cart__title">Let’s Get Solution For Building Construction Work</h3>
                <p class="cart__text">26 December,2022 </p>
            </div>
            <div class="blog__cart">
                <div class="blog_img">
                    <img style="width: 340px; border-radius: 15% 15% 0 0;" src="../assets/HomePage/Living__design.png"
                        alt="Living__design">
                    <p class="img__text">Living Design</p>
                </div>
                <h3 class="cart__title">Let’s Get Solution For Building Construction Work</h3>
                <p class="cart__text">26 December,2022 </p>
            </div>
            <div class="blog__cart">
                <div class="blog_img">
                    <img style="width: 340px; border-radius: 15% 15% 0 0;" src="../assets/HomePage/Interior__design.png"
                        alt="Interior__design">
                    <p class="img__text">Interior Design</p>
                </div>
                <h3 class="cart__title">Let’s Get Solution For Building Construction Work</h3>
                <p class="cart__text">26 December,2022 </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
a {
    text-decoration: none;
}

* {
    padding: 0;
    margin: 0;
}

.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}

.banner {
    position: relative;
}

.banner__intro {
    background-image: url(../assets/HomePage/banner_img.png);
    background-size: cover;
    width: 1201px;
    height: 758px;
    border-radius: 10%;
}

.banner__content {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-top: 205px;
    padding-left: 52px;
    width: 434px;
}

.banner__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 81.25px */
}

.banner__text {
    padding-top: 18px;
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    padding-bottom: 21px;
}

.banner__button {
    display: flex;
    padding: 26px 49px 26px 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 220px;


    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
}

.button__text {
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.button__text::after {
    content: url(../assets/HomePage/button_img.svg);
    padding-left: 10px;
}

.project {
    padding-top: 96px;
    padding-bottom: 96px;
}

.project__heading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

}

.heading__title {
    color: #292F36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.heading__text {
    color: #4D5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    width: 737px;
    padding-top: 8px;
    padding-bottom: 93px;
}

.project__models {
    display: grid;
    grid-template-columns: 552px 552px;
    gap: 104px;

}

.project__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;

    padding-bottom: 4px;
    padding-top: 24px;
}

.project__discription {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.project__icon {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 93px;
    flex-direction: column;
    align-content: space-between;
    justify-content: center;
}

.counter {
    background: #f8efe5;
    display: flex;
    justify-content: space-between;
    padding-top: 151px;
    padding-bottom: 151px;
}

.counter__numbers {
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 106.25px */
    letter-spacing: 1.7px;
}

.counter__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.blog__heading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 96px;

}

.blog__title {
    color: #292F36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;

}

.blog__text {
    color: #4D5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    width: 811px;
    padding-top: 12px;
    padding-bottom: 52px;
}

.img__text {
    position: relative;
    top: -60px;
    left: 30px;
    background: white;
    width: 124px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14%;

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

.blog__content {
    display: grid;
    grid-template-columns: repeat(3, 340px);
    justify-content: space-between;
}

.blog__cart {
    height: 521px;
    width: 340px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 21px;
}

.blog__cart:nth-child(2n) {
    border: 1px solid #E7E7E7;
    background: #F4F0EC;
}

.cart__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    padding-bottom: 30px;
}

.cart__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;

    padding-bottom: 8px;
    height: 52px;
}

.cart__text::after {
    content: url(../assets/HomePage/project_icon.svg);
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -44px;
}
</style>