<template>
    <div>

        <Head>
            <Title>Login</Title>
            <Meta name="decription" content="Login Page">
            </Meta>
        </Head>
        <div class="logins">
            <v-container>
                <v-row>
                    <v-col cols="12" class="col-md-12">
                        <div class="logins-box m-inline-auto">
                            <h1 class="logins-box-h">Login for testing purposes with :
                                <div>username : mor_2314</div>
                                <dir>password : 83r5^_ </dir>
                            </h1>
                            <div style="margin:20px 0 ; text-align: center;"><v-icon style="font-size: 60px; "
                                    class=" text-error">mdi-login</v-icon></div>
                            <form @submit.prevent action="" class="form">
                                <div class="form-input-box position-relative">
                                    <input v-model="username" type="username" class="form-control w-100  logins-input"
                                        placeholder="Email">
                                </div>
                                <div class="form-input-box position-relative">
                                    <input v-model="password" type="password" class="form-control w-100 logins-input"
                                        placeholder="password">
                                </div>
                                <button @click="login()" class="logins-btn text-center">Login</button>
                            </form>
                            <div class="logins-box-row d-flex align-items-center justify-content-between"></div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
    <v-dialog v-model="success" max-width="500">
        <v-card style="padding: 30px; ">
            <v-card-title class="text-center">
                <v-icon class=" text-successe "
                    style="font-size: 80px; background-color: green; border-radius: 50%; padding: 20px ;color:white;">mdi-check</v-icon>
            </v-card-title>
            <v-card-text>
                <h2 class="text-center text-successe">You are logged in successfully,
                    please wait a seconed
                </h2>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            success: false,
            userToken: '',
        }
    },
    async mounted() {
    },
    methods: {
        async login() {
            useFetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                })
            }).then(res => {
                if (res.status.value == 'success') {
                    this.userToken = res.data.value
                    localStorage.setItem('user-token', JSON.stringify(this.userToken))
                    this.success = true
                    setTimeout(() => {
                        this.success = false
                        navigateTo('/')
                    }, 3000)
                }
            })
        },
    }
}


</script>

<style scoped>
.r-50 {
    border-radius: 50%;
}

.form-input-box input:focus {
    border: 1px solid #0D9EFF;
}

.dark .dark-show {
    display: flex !important;
}

.dark .dark-none {
    display: none !important;
}

.dark .logo-box {
    background-color: #15212D;
}

.dark .logins-box-h {
    color: #fff;
}

.dark .logins-input {
    background-color: #2D343F;
    border-color: transparent;
    color: #fff;
}

.dark .logins-input::placeholder {
    color: #fff;
}

.dark .logins-box-row-b1 {
    color: #fff;
}

.dark .logins-btn:hover {
    background-color: #2D343F;
    color: #fff;
}

.logins {
    padding: 50px 0 60px 0;
}

.logins-input {
    height: 55px;
    border: 1px solid #d4d4d4;
    color: #C3C3C3;
    padding: 5px 15px;
    font-size: 16px;
    margin-bottom: 30px;
}

.logins-input::placeholder {
    color: #C3C3C3;
    font-size: 16px;
}

.logins-box {
    max-width: 490px;
}

.logins-box-h {
    font-size: 16px;
    font-weight: bold;
    color: #2F2E2E;
    text-align: center;
    margin-bottom: 25px;
}

.logins-btn {
    width: 100%;
    height: 55px;
    background-color: #B52429;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 25px;
}

.logins-btn:hover {
    background-color: #fff;
    color: #B52429;
}

.logins-box-row-b1 {
    font-size: 15px;
    color: #2F2E2E;
    font-weight: 500;
}

.logins-box-row-b1 a {
    color: #3AB4F2;
    font-weight: 700;
}

.logins-box-row-link {
    color: #3AB4F2;
    font-weight: 700;
    font-size: 16px;
}

.logins-box-row-link:hover {
    color: #3AB4F2;
}

.logins-box2-img {
    width: 100%;
    height: 485px;
    border-radius: 35px;
    object-fit: cover;
}

.logins .row {
    align-items: center;
}

.logins-box-p {
    font-size: 16px;
    color: #3AB4F2;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
}

.password-hit {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #B52429;
    background-color: #FFF6F7;
    border-radius: 10px;
    padding: 10px 20px;
}

.logo-box-outer {
    text-align: center;
    width: fit-content;
}

.m-inline-auto {
    margin-inline: auto;
}

.logo-box {
    width: 85px;
    height: 85px;
    background-color: #fff;
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 4px;
}

.logo-boxlogo {
    width: 63px;
    height: auto;
    max-height: 63px;
    object-fit: contain;
}

.form-input-box input {
    box-shadow: none;

}

@media (max-width: 1599px) {
    .logins-box2-img {
        height: 360px;
    }
}

@media (max-width: 1799px) {
    .logins-box2-img {
        height: 400px;
    }
}

@media (max-width: 1399px) {
    .logo-box {
        width: 70px;
        height: 70px;
    }

    .logo-boxlogo {
        width: 55px;
    }

    .logins-box2-img {
        height: 310px;
    }
}

@media (max-width: 1023px) {
    .logins-box2-img {
        height: 270px;
    }
}

@media (max-width: 1023px) {
    .logins-box2-img {
        border-radius: 15px;
    }
}

@media (max-width: 767px) {
    .logins-box {
        margin-bottom: 20px;
    }
}
</style>