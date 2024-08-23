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
                            <div class="d-flex align-center justify-space-between ga-4">
                                <div @click="loginGithub('github')" class="sign-github-btn flex-grow-1">
                                    <svg width="21" height="21" viewBox="0 0 20 20" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                                        <title>github [#142]</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs>

                                        </defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Dribbble-Light-Preview"
                                                transform="translate(-140.000000, -7559.000000)" fill="#000000">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path
                                                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                        id="github-[#142]">

                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div @click="loginGoogle('google')" class="sign-google-btn flex-grow-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                                        fill="none">
                                        <g clip-path="url(#clip0_1151_8275)">
                                            <path
                                                d="M7.59514 0.769107C5.59683 1.46234 3.87349 2.77812 2.67825 4.52317C1.48301 6.26823 0.878876 8.35058 0.95458 10.4644C1.03028 12.5781 1.78184 14.6119 3.09885 16.267C4.41587 17.9221 6.22892 19.1112 8.2717 19.6597C9.92783 20.0871 11.663 20.1058 13.328 19.7144C14.8363 19.3756 16.2307 18.6509 17.3748 17.6113C18.5656 16.4962 19.4299 15.0777 19.8748 13.5082C20.3585 11.8014 20.4445 10.0065 20.1264 8.26129H10.8264V12.1191H16.2123C16.1047 12.7344 15.874 13.3217 15.5341 13.8457C15.1942 14.3698 14.7521 14.8199 14.2342 15.1691C13.5765 15.6042 12.8351 15.8969 12.0576 16.0285C11.2779 16.1735 10.478 16.1735 9.69826 16.0285C8.90793 15.8651 8.16029 15.5389 7.50295 15.0707C6.44693 14.3231 5.65401 13.2612 5.23733 12.0363C4.8136 10.7885 4.8136 9.43568 5.23733 8.18786C5.53393 7.31319 6.02425 6.51682 6.6717 5.85817C7.41263 5.09059 8.35066 4.54191 9.38288 4.27235C10.4151 4.00279 11.5016 4.02275 12.5233 4.33004C13.3213 4.57503 14.0512 5.00307 14.6545 5.58004C15.2618 4.97588 15.8681 4.37015 16.4733 3.76286C16.7858 3.43629 17.1264 3.12536 17.4342 2.79098C16.5132 1.93391 15.4321 1.26701 14.253 0.828482C12.1056 0.0487788 9.75604 0.027825 7.59514 0.769107Z"
                                                fill="white" />
                                            <path
                                                d="M7.59502 0.769378C9.75574 0.0275922 12.1053 0.0479944 14.2528 0.827191C15.4322 1.2687 16.5128 1.93881 17.4325 2.79907C17.12 3.13344 16.7903 3.44594 16.4716 3.77094C15.8653 4.37615 15.2596 4.97927 14.6544 5.58032C14.051 5.00334 13.3212 4.5753 12.5231 4.33032C11.5019 4.02194 10.4154 4.00083 9.38286 4.26929C8.35036 4.53775 7.41176 5.08541 6.67002 5.85219C6.02257 6.51084 5.53225 7.30722 5.23564 8.18188L1.99658 5.67407C3.15597 3.37494 5.16338 1.61629 7.59502 0.769378Z"
                                                fill="#E33629" />
                                            <path
                                                d="M1.13735 8.1582C1.31144 7.29538 1.60048 6.45981 1.99672 5.67383L5.23579 8.18789C4.81206 9.43571 4.81206 10.7885 5.23579 12.0363C4.15662 12.8697 3.07693 13.7072 1.99672 14.5488C1.00477 12.5743 0.702244 10.3246 1.13735 8.1582Z"
                                                fill="#F8BD00" />
                                            <path
                                                d="M10.8264 8.25977H20.1264C20.4445 10.005 20.3584 11.7999 19.8748 13.5066C19.4299 15.0761 18.5656 16.4947 17.3748 17.6098C16.3295 16.7941 15.2795 15.9848 14.2342 15.1691C14.7524 14.8196 15.1948 14.369 15.5347 13.8443C15.8746 13.3197 16.1051 12.7319 16.2123 12.116H10.8264C10.8248 10.8316 10.8264 9.5457 10.8264 8.25977Z"
                                                fill="#587DBD" />
                                            <path
                                                d="M1.99512 14.5486C3.07533 13.7153 4.15501 12.8778 5.23418 12.0361C5.65169 13.2614 6.44575 14.3235 7.50293 15.0705C8.16232 15.5365 8.91157 15.8601 9.70293 16.0205C10.4827 16.1655 11.2825 16.1655 12.0623 16.0205C12.8398 15.8889 13.5812 15.5962 14.2389 15.1611C15.2842 15.9768 16.3342 16.7861 17.3795 17.6018C16.2356 18.642 14.8411 19.3672 13.3326 19.7064C11.6676 20.0979 9.9325 20.0791 8.27637 19.6518C6.96653 19.302 5.74305 18.6855 4.68262 17.8408C3.56021 16.9497 2.64348 15.8267 1.99512 14.5486Z"
                                                fill="#319F43" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1151_8275">
                                                <rect width="20" height="20" fill="white"
                                                    transform="translate(0.62793 0.111328)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <form @submit.prevent action="" class="form mt-5">
                                <div class="form-input-box position-relative">
                                    <input v-model="email" type="username" class="form-control w-100  logins-input"
                                        placeholder="Email">
                                </div>
                                <div class="form-input-box position-relative">
                                    <input v-model="password" type="password" class="form-control w-100 logins-input"
                                        placeholder="password">
                                </div>
                                <button @click="login()" class="logins-btn text-center">Log in</button>
                            </form>
                            <div class="logins-box-row d-flex align-items-center justify-center">Don't have an
                                account ?
                                <NuxtLink to="/signUp">Create account</NuxtLink>
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
        let email = ref('')
        let password = ref('')
        const user = useSupabaseUser()
        const client = useSupabaseClient()

        //sign up with github account
        const loginGithub = async () => {
            const { data, error } = await client.auth.signInWithOAuth({ provider: "github" })
        }
        //sign up with google account\
        const loginGoogle = async () => {
            const { data, error } = await client.auth.signInWithOAuth({ provider: "google" })
        }
        //sign in with Your account
        let login = async () => {
            try {
                let { data, error } = await client.auth.signInWithPassword({
                    email: email.value,
                    password: password.value
                })
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
        return {
            client, user, loginGoogle, loginGithub, email, password, login
        }
    },
    data() {
        return {
        }
    },
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