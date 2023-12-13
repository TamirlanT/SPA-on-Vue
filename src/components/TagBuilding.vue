<template>
    <div>
        <div class="tagcontent__box">
            <h2 class="tagcontent__title">Let’s Get Solution for Building
                Construction Work
            </h2>
            <div class="tagcontent__image tag__building center">
            </div>
            <div class="tagcontent__info">
                <div class="tagcontent__date">
                    <p>26 December,2022 </p>
                </div>
                <nav class="tagcontent__links">
                    <router-link class="tagcontent__link" to="/404">Interior</router-link>
                    <router-link class="tagcontent__link" to="/">Home</router-link>
                    <router-link class="tagcontent__link" to="/404">Decore</router-link>

                </nav>
            </div>
            <div class="tagcontent__decription">
                <p class="tagcontent__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to
                    popular belief.There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or randomised words which don't look
                    even slightly believable. <br> <br>

                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TagBuilding',
};
</script>

<style lang="css" scoped>
.tag__building {
    background-image: url(../assets/BlogDetails/project_5.png);
}
</style>