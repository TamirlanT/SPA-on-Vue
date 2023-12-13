<template>
    <div>
        <div class="tags center">
            <div class="banner">
                <img src="../assets/ArticleNews/banner.jpg" alt="banner">
                <div class="banner__box ">
                    <h2 class="banner__title">Article News</h2>
                    <nav class="banner__links">
                        <router-link class="header__link" to="/">Home</router-link>/
                        <router-link class="header__link" to="/blog">Blog</router-link>
                    </nav>
                </div>
            </div>
        </div>
        <div class="blog center">
            <h2 class="blog__title">
                Latest Post
            </h2>
            <div class="blog__box">
                <img class="blog__img" src="../assets/ArticleNews/blog__img.png" alt="blog image">
                <div class="blog__description">
                    <h2 class="blog__subtitle">Low Cost Latest Invented Interior Designing Ideas</h2>
                    <p class="blog__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
                        maximus.posuere in.Contrary to popular belief.
                        <br><br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>
                    <p class="blog__date">26 December,2022 </p>
                </div>
            </div>
        </div>
        <div id="app" class="content center">
            <h2 class="content__title">Articles & News</h2>
            <div class="content__products">
                <div v-for="item in   data  " :key="item.id" class="content__cart">
                    <div class="content_img">
                        <img class="content__image" :src="item.source" :alt="item.alter">
                        <p class="img__text">{{ item.imageText }}</p>
                    </div>
                    <h3 class="cart__title">{{ item.cartTitle }}</h3>
                    <p class="cart__text">{{ item.cartText }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleNews',

    data() {
        return {
            data: [
                {
                    source: require('../assets/ArticleNews/project_1.png'),
                    alter: 'Kitchen Design',
                    imageText: 'Kitchen Design',
                    cartTitle: 'Let’s Get Solution For Building Construction Work',
                    cartText: '26 December,2022'
                },
                {
                    source: require('../assets/ArticleNews/project_2.png'),
                    alter: 'Living Design',
                    imageText: 'Living Design',
                    cartTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    cartText: '22 December,2022 '
                },
                {
                    source: require('../assets/ArticleNews/project_3.png'),
                    alter: 'Interior Design',
                    imageText: 'Interior Design',
                    cartTitle: 'Best For Any Office & Business Interior Solution',
                    cartText: '25 December,2022 '
                },
                {
                    source: require('../assets/ArticleNews/project_4.png'),
                    alter: 'Kitchen Design',
                    imageText: 'Kitchen Design',
                    cartTitle: 'Let’s Get Solution For Building Construction Work',
                    cartText: '26 December,2022'
                },
                {
                    source: require('../assets/ArticleNews/project_5.png'),
                    alter: 'Living Design',
                    imageText: 'Living Design',
                    cartTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    cartText: '22 December,2022'
                },
                {
                    source: require('../assets/ArticleNews/project_6.png'),
                    alter: 'Interior Design',
                    imageText: 'Interior Design',
                    cartTitle: 'Best For Any Office & Business Interior Solution',
                    cartText: '25 December,2022'
                },
            ]
        }
    }
};
</script>

<style lang="css" scoped>
/* .banner {
    background-image: url(../assets/ArticleNews/banner.jpg);
    background-repeat: no-repeat;
} */

.banner {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
}

.banner__box {
    position: absolute;
    width: 338px;
    padding: 41px 78px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 37px 37px 0px 0px;
    gap: 10px;
    height: 80px;
    bottom: 40px;
}

.banner__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
}

.banner__link {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.blog {
    padding-top: 200px;
    padding-bottom: 150px;
}

.blog__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    padding-bottom: 49px;
}

.blog__box {
    display: flex;
    padding-left: 22px;
    gap: 65px;
}

.blog__img {
    border-radius: 50px;
    background: #C4C4C4;

    width: 569px;
    height: 478px;
    flex-shrink: 0;
}

.blog__description {
    padding-top: 55px;
}

.blog__subtitle {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    width: 443px;
    padding-bottom: 22px;
}

.blog__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;

    width: 469px;
    padding-bottom: 50px;
}

.blog__date {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;

    display: flex;
    width: 223px;
    height: 33px;
    align-items: center;
    justify-content: center;

}

.blog__date::after {
    content: url(../assets/ArticleNews/project_icon.svg);
    position: relative;
    left: 230px;

}

.content {
    padding-top: 120px;
    padding-bottom: 21px;

}

.content__products {
    display: grid;
    grid-template-columns: repeat(3, 340px);
    justify-content: space-between;
    gap: 56px;
}

.content__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    padding-bottom: 30px;
}

.content__cart {
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

.content__cart:nth-child(2n) {
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

.content__image {
    width: 340px;
    border-radius: 15% 15% 0 0;
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
    content: url(../assets/ArticleNews/project_icon.svg);
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -44px;
}
</style>