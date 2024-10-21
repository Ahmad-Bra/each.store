<template>
  <div>

    <Head>
      <Title>Sign Up</Title>
      <Meta name="decription" content="SignUp Page">
      </Meta>
    </Head>
    <div class="signUp">
      <v-container>
        <v-row class="align-center">
          <v-col cols="6" data-aos="fade-right" data-aos-duration="1000">
            <div class="img-holder">
              <img style="max-width: 100%" src="/public/images/signup.png
              " alt="">
            </div>
          </v-col>
          <v-col cols="6" class="col-md-12" data-aos="zoom-out" data-aos-duration="1500">
            <h1 class="title"> {{ $t('Sign up:') }}</h1>
            <p class="desc">{{ $t('Create New Account.') }}</p>
            <div class="logins-box ">
              <form @submit.prevent action="" class="form mt-5">
                <div class="form-input-box position-relative">
                  <input v-model="email" type="username" class="form-control w-100  logins-input"
                    :placeholder="$t('Email')">
                </div>
                <div class="form-input-box position-relative">
                  <input v-model="username" type="username" class="form-control w-100  logins-input"
                    :placeholder="$t('Your Name')">
                </div>
                <div class="form-input-box position-relative ">
                  <input v-model="password" :type="isVisible ? 'text' : 'password'"
                    class="form-control w-100 mb-0 logins-input" :placeholder="$t('Password')">
                  <v-icon @click="isVisible = !isVisible" class="eye-ic"
                    :icon="!isVisible ? 'mdi-eye' : 'mdi-eye-off'"></v-icon>
                </div>
                <button @click="signup()" class="logins-btn text-center">{{ $t('Sign Up') }}</button>
              </form>
              <div class="logins-box-row d-flex align-items-center justify-start">{{ $t("Already have an accout ?") }}
                <NuxtLink class="link" to="/login">{{ $t('Login') }}</NuxtLink>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>


export default {
  setup() {
    useHead({
      link: [
        { rel: 'preload', href: '/public/images/signup.png', as: 'image' }
      ]
    }), defineRouteRules({
      prerender: true,
    });
    let email = ref('')
    let password = ref('')
    let username = ref('')
    const user = useSupabaseUser()
    const client = useSupabaseClient()
    //sign up with new account
    let signup = async () => {

      try {
        let { data, error } = await client.auth.signUp({
          email: email.value,
          password: password.value,
          username: username.value
        })
        console.log(data);

        if (data.user) {
          user.value.username = username.value
        }

        if (error) {
          alert(error.message)
        }
      } catch (error) {
        throw error
      }
    }
    watchEffect(() => {
      if (user.value) {
        navigateTo('/')
      }
    })
    // console.log(user.value.username);

    return {
      client, user, email, password, signup, username,
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
}


</script>

<style scoped lang="scss">
.r-50 {
  border-radius: 50%;
}

.img-holder {

  animation: move 3s infinite alternate;
}

@keyframes move {
  0% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(20px);
  }
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

.signUp {
  padding: 50px 0 60px 0;
}

.logins-input {
  height: 55px;
  border: 1px solid #d4d4d4;
  color: #121212;
  padding: 5px 15px;
  font-size: 14px;
  margin-bottom: 16px;
  border-radius: 4px;
  outline: none;
}

.logins-input:focus {
  border: 1px solid #3978fe !important;
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
  background: linear-gradient(90deg, #07063f -19.86%, #3978fe 100%);
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin: 16px 0 25px;
}

.logins-btn:hover {
  color: #0D9EFF;
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

.logins-box-row {
  font-size: 15px;
  text-align: end;
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

.title {
  color: #2151b9;
  font-size: 37px;
}

.desc {
  font-size: 14px;
  color: #07063f;
  position: relative;
  margin-bottom: 32px;

  &::before {
    position: absolute;
    content: '';
    width: 80px;
    height: 3px;
    border-radius: 4px;
    background: linear-gradient(90deg, #07063f -19.86%, #3978fe 100%);
    left: 0;
    top: 32px;
  }
}

.link {
  color: #3978fe;
  text-decoration: none;
  font-size: 15px;
  padding: 0 10px;
}


.eye-ic {
  position: absolute;
  right: 12px;
  top: 50%;
  color: #C3C3C3;
  cursor: pointer;
  transform: translateY(-50%);
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

.sign-github-btn,
.sign-google-btn {
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: linear-gradient(90deg, #07063f -19.86%, #3978fe 100%);
  cursor: pointer;
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