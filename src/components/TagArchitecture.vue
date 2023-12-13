<template>
    <div>
        <div class="tagcontent__box">
            <h2 class="tagcontent__title">Lorem ipsum dolor sit amet
            </h2>
            <div class="tagcontent__image tag__architecture center"></div>
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nam voluptatibus ad, molestiae sint
                    eos molestias minus optio soluta numquam quod impedit sunt rem facilis. Asperiores veniam architecto
                    culpa quae!
                    Ea fugit error consequuntur, perspiciatis laborum delectus inventore at, veritatis autem magni nihil
                    rerum eos repellat obvuecaecati? Explicabo repudiandae iure impedit, tenetur earum ad ullam quibusdam
                    perferendis molestias. Laborum, minima?
                    Non explicabo quibusdam, eum nesciunt nobis aspernatur nihil eveniet minus, alias quas unde praesentium
                    reiciendis laboriosam laborum quaerat! Alias molestias quae in ipsa? Consequatur explicabo, iure at
                    voluptatibus quis alias? <br> <br>

                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TagArchitecture',
};
</script>

<style lang="css" scoped>
.tag__architecture {
    background-image: url(../assets/BlogDetails/project_3.png);
}
</style>