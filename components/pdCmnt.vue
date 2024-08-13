<template>
    <div class="proDetCmnt">
        <div class="container">
            <div class="proDetCmnt-wrpr d-flex">
                <div class="proDetCmnt-col1" role="tablist">
                    <button class="proDetCmnt-col1-tab" id="reviewsTab" data-bs-toggle="tab"
                        data-bs-target="#reviewsCont" type="button" role="tab" aria-controls="reviewsCont"
                        aria-selected="false">
                        Reviews
                        <span class="d-flex align-center justify-center r-50">{{ productRev.length }}</span>
                    </button>
                </div>
                <div class="proDetCmnt-col2">
                    <div class="proDetCmnt-cntnt tab-pane fade" id="reviewsCont" role="tabpanel"
                        aria-labelledby="reviewsCont-tab" tabindex="0">
                        <div class="proDetCmnt-cntnt-wrpr d-flex justify-space-between">
                            <div class="proDetCmnt-cntnt-b1">
                                <textarea placeholder="Write Comment" class="reviewsBox3-textarea"
                                    v-model="comment"></textarea>
                                <div class="reviewsBox3-row d-flex align-center  ga-4 justify-space-between">
                                    <div class="reviewsBox3-row-inn">
                                        You must be logged in to post a review.
                                    </div>
                                    <button @click="addReview()" v-if="comment.length > 0 && rating.length >= 0"
                                        class="reviewsBox3-row-inn2 disabled d-flex align-center justify-content-center">Publish</button>
                                </div>
                            </div>
                            <div class="reviewsBox-seprator"></div>
                            <div class="reviewsBox2">
                                <div class="reviewsBoxInner-s1 d-flex align-center  mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                                        <path id="XMLID_328_"
                                            d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                            transform="translate(-1.999 -2)" fill="#ffd500" />
                                    </svg>

                                    <div class="reviewsBoxInner-s1-box">
                                        <h1 class="reviewsBoxInner-s1-h reviewsBoxInner-s1-h--a">Add Rating
                                        </h1>
                                    </div>
                                </div>
                                <div class="reviewsBoxInner-row d-flex align-center  ga-3 mb-3">
                                    <input type="radio" name="rating" v-model="rating" value="5" id="rating5"
                                        class="reviewsBoxInner-row-input">
                                    <label for="rating5" class="reviewsBoxInner-label">
                                        <div></div>
                                    </label>
                                    <ul class="d-flex align-center rating ga-2">
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                    </ul>
                                </div>
                                <div class="reviewsBoxInner-row d-flex align-center  ga-3 mb-3">
                                    <input type="radio" name="rating" v-model="rating" value="4" id="rating4"
                                        class="reviewsBoxInner-row-input">
                                    <label for="rating4" class="reviewsBoxInner-label">
                                        <div></div>
                                    </label>
                                    <ul class="d-flex align-center rating ga-2">
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                    </ul>
                                </div>
                                <div class="reviewsBoxInner-row d-flex align-center  ga-3 mb-3">
                                    <input type="radio" name="rating" v-model="rating" value="3" id="rating3"
                                        class="reviewsBoxInner-row-input">
                                    <label for="rating3" class="reviewsBoxInner-label">
                                        <div></div>
                                    </label>
                                    <ul class="d-flex align-center rating ga-2">
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                    </ul>
                                </div>
                                <div class="reviewsBoxInner-row d-flex align-center  ga-3 mb-3">
                                    <input type="radio" name="rating" v-model="rating" value="2" id="rating2"
                                        class="reviewsBoxInner-row-input">
                                    <label for="rating2" class="reviewsBoxInner-label">
                                        <div></div>
                                    </label>
                                    <ul class="d-flex align-center rating ga-2">
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>


                                        </li>
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                                <div class="reviewsBoxInner-row d-flex align-center  ga-3 mb-3">
                                    <input type="radio" name="rating" v-model="rating" value="1" id="rating1"
                                        class="reviewsBoxInner-row-input">
                                    <label for="rating1" class="reviewsBoxInner-label">
                                        <div></div>
                                    </label>
                                    <ul class="d-flex align-center rating ga-2">
                                        <li class="d-flex align-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                viewBox="0 0 21 21">
                                                <path id="XMLID_328_"
                                                    d="M22.92,9.89A1.457,1.457,0,0,0,21.758,8.9l-5.481-.821L13.81,2.841a1.441,1.441,0,0,0-2.62,0L8.758,8.061,3.24,8.9a1.458,1.458,0,0,0-1.162.989,1.5,1.5,0,0,0,.349,1.534l3.991,4.084-.943,5.757a1.488,1.488,0,0,0,.608,1.469,1.417,1.417,0,0,0,1.515.085L12.465,20.1,17.4,22.821a1.42,1.42,0,0,0,1.515-.085,1.487,1.487,0,0,0,.608-1.469L18.579,15.5l3.992-4.077A1.5,1.5,0,0,0,22.92,9.89Z"
                                                    transform="translate(-1.999 -2)" fill="#ffd500" />
                                            </svg>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="reviewsBox">
                                <div class="reviewsBoxInner">
                                    <div class="reviewsBoxInner-s1 d-flex align-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                            viewBox="0 0 30 30">
                                            <path id="XMLID_328_"
                                                d="M31.886,13.271a2.082,2.082,0,0,0-1.66-1.413L22.4,10.685,18.871,3.2a2.058,2.058,0,0,0-3.743,0l-3.473,7.456-7.882,1.2a2.084,2.084,0,0,0-1.66,1.413,2.147,2.147,0,0,0,.5,2.192l5.7,5.835L6.965,29.523a2.126,2.126,0,0,0,.869,2.1A2.024,2.024,0,0,0,10,31.744l6.952-3.883L24,31.744a2.028,2.028,0,0,0,2.164-.122,2.124,2.124,0,0,0,.869-2.1l-1.349-8.235,5.7-5.824A2.147,2.147,0,0,0,31.886,13.271Z"
                                                transform="translate(-1.999 -2)" fill="#ffd500"></path>
                                        </svg>
                                        <div class="reviewsBoxInner-s1-box">
                                            <h1 class="reviewsBoxInner-s1-h">{{ Math.floor(productDetails.rating) }}
                                                Rating</h1>
                                            <p class="reviewsBoxInner-s1-p">Based on {{ productRev.length }} reviews</p>
                                        </div>
                                    </div>
                                    <div class="reviewsBoxInner-row d-flex align-center ">
                                        <p class="reviewsBoxInner-row-p">5</p>
                                        <v-progress-linear color="amber" model-value="100" buffer-color="yellow"
                                            bg-opacity=".2" height="15"></v-progress-linear>
                                    </div>
                                    <div class="reviewsBoxInner-row d-flex align-center ">
                                        <p class="reviewsBoxInner-row-p">4</p>
                                        <v-progress-linear color="amber" model-value="75" bg-opacity=".2"
                                            height="15"></v-progress-linear>
                                    </div>
                                    <div class="reviewsBoxInner-row d-flex align-center ">
                                        <p class="reviewsBoxInner-row-p">3</p>
                                        <v-progress-linear color="amber" model-value="50" buffer-color="yellow"
                                            bg-opacity=".2" height="15"></v-progress-linear>
                                    </div>
                                    <div class="reviewsBoxInner-row d-flex align-center ">
                                        <p class="reviewsBoxInner-row-p">2</p>
                                        <v-progress-linear color="amber" model-value="25" buffer-color="yellow"
                                            bg-opacity=".2" height="15"></v-progress-linear>
                                    </div>
                                    <div class="reviewsBoxInner-row d-flex align-center ">
                                        <p class="reviewsBoxInner-row-p">1</p>
                                        <v-progress-linear color="amber" model-value="10" buffer-color="yellow"
                                            bg-opacity=".2" height="15"></v-progress-linear>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="reviews-wrpr2">
                            <div class="reviews-wrpr2-box d-block" v-for="rev in productDetails.reviews" :key="rev">
                                <div class="reviews-wrpr2-box-holder">
                                    <div class="reviews-wrpr2-row d-flex justify-space-between">
                                        <div class="d-flex align-center ga-2">
                                            <div class="reviews-wrpr2Box">
                                                M
                                            </div>
                                            <div>
                                                <h1 class="reviews-wrpr2Box-h">{{ rev.reviewerName }}
                                                </h1>
                                                <ul class="rat-li-cmt d-flex align-center  ga-1">
                                                    <v-rating class="pt-5" v-model="rev.rating" density="compact"
                                                        color="yellow-darken-3" half-increment readonly>
                                                    </v-rating>
                                                </ul>
                                            </div>
                                        </div>
                                        <p class="reviews-wrpr2-p">{{ rev.date }}</p>
                                    </div>
                                    <p class="reviews-wrpr2-row-p">
                                        {{ rev.comment }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ProductsModule } from "~/stores/Products"
import { mapState } from "pinia";
export default {
    methods: {
        addReview() {
            this.productRev.push({
                reviewerName: "user",
                date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} time: ${new Date().getTime()}`,
                rating: this.rating,
                comment: this.comment,
            })
        }
    },
    computed: {
        ...mapState(ProductsModule, ['productDetails', "productRev"]),
    },
    data() {
        return {
            comment: '',
            rating: '',
        }
    },
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
a,
form {
    margin: 0;
    padding: 0;
    list-style: none;
}

.dark-mode .reviews-wrpr2Box {
    background-color: #4A4A4A;
}

.r-50 {
    border-radius: 50%;
}

.dark-mode .reviewsBox2 {
    background-color: #2D343F;
    border-color: transparent;
}

.dark-mode .reviews-wrpr2-box,
.dark-mode .proDetCmnt-wrpr,
.dark-mode .proDetCmnt-col1,
.dark-mode .proDetCmnt-cntnt-row {
    border-color: #2D343F;
}

.dark-mode .reviews-wrpr2Box-h,
.dark-mode .reviews-wrpr2-row-p {
    color: #fff;
}

.dark-mode .proDetCmnt-col1-tab {
    background-color: transparent;
    color: #fff;
    border-color: transparent;
}

.dark-mode .reviewsBox3-textarea::placeholder,
.dark-mode .reviewsBox3-textarea {
    background-color: #2D343F;
    color: #fff;
    border-color: transparent;
}

.dark-mode .reviewsBox3-row-inn {
    background-color: #2A2A2B;
}

.dark-mode .proDetCmnt-col1-tab.active {
    background-color: #1a2f43;
}

.rtl .proDetCmnt-col1 {
    padding: 25px 0px 25px 20px;
    border-right: none;
    border-left: 1px solid #caedfb;
}

.rtl .proDetCmnt-col2 {
    padding: 25px 30px 0 0px;
}

.proDetCmnt {
    padding: 50px 0;
}

.proDetCmnt-wrpr {
    border-top: 1px solid #caedfb;
}

.proDetCmnt-col1 {
    width: 210px;
    border-right: 1px solid #caedfb;
    padding: 25px 20px 25px 0;
}

.proDetCmnt-col1-tab {
    padding: 12px 15px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 18px;
    color: #313131;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
}

.proDetCmnt-col1-tab.active {
    background-color: #f5f5f5;
}

.proDetCmnt-col1-tab span {
    width: 28px;
    height: 28px;
    background-color: #ffc801;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
}

.proDetCmnt-col2 {
    width: calc(100% - 210px);
    padding: 25px 0px 0 30px;
}

.proDetCmnt-cntnt-h {
    font-size: 18px;
    color: #0786d6;
    margin-bottom: 5px;
    font-weight: bold;
}

.proDetCmnt-cntnt-row {
    column-gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #d9d9d9;
}

.proDetCmnt-cntnt-desc {
    width: calc(100% - 160px);
}

.proDetCmnt-cntnt-heading {
    font-size: 16px;
    color: #272727;
    font-weight: 500;
    width: 150px;
}

.proDetCmnt-cntnt-desc {
    font-size: 16px;
    font-weight: 500;
    color: #727272;
}

.proDetCmnt-cntnt-box {
    margin-bottom: 40px;
}

.proDetCmnt-cntnt-b1 {
    width: 500px;
}

.reviewsBox3-textarea {
    width: 100%;
    padding: 20px 20px;
    border: 1px solid #f9f9f9;
    border-radius: 7px;
    color: #888888;
    font-size: 16px;
    height: 178px;
    margin-bottom: 20px;
    outline: none;
}

.reviewsBox3-row-inn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff6e5;
    color: #fba829;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 6px;
    width: 65%;
}

.reviewsBox3-row-inn2 {
    width: 30%;
    background-color: #24d4fd;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border-radius: 6px;
    padding: 10px 20px;
}

.reviewsBox3-row-inn2:hover {
    background-color: #fff;
    color: #040404;
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.04);
}

.reviewsBox2 {
    width: 225px;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    padding: 20px 15px;
}

.reviewsBoxInner-s1-h--a {
    font-weight: 500;
}

.reviewsBoxInner-row-input {
    display: none;
}

.reviewsBoxInner-label {
    width: 18px;
    height: 18px;
    border: 1px solid #cfcfcf;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.reviewsBoxInner-label div {
    width: 8px;
    height: 8px;
    background-color: #cfcfcf;
    border-radius: 50%;
    inset: 0;
    z-index: 1;
}

input.reviewsBoxInner-row-input[type="radio"]:checked+.reviewsBoxInner-label {
    border-color: #0aacde;
}

input.reviewsBoxInner-row-input[type="radio"]:checked+.reviewsBoxInner-label div {
    background-color: #0aacde;
}

.reviewsBoxInner-s1-h {
    font-size: 18px;
    font-weight: 500;
}

.reviewsBoxInner-s1 {
    column-gap: 10px;
    margin-bottom: 10px;
}

.reviewsBox-seprator {
    width: 1px;
    background-color: #f3f3f3;
}

.reviewsBoxInner-s1 {
    column-gap: 10px;
    margin-bottom: 10px;
}

.reviewsBoxInner-s1-h {
    font-size: 18px;
    font-weight: 700;
}

.reviewsBoxInner-s1-p {
    font-size: 14px;
    color: #b5b5b5;
}

.reviewsBoxInner-row {
    column-gap: 10px;
    margin-bottom: 12px;
}

.reviewsBoxInner-row p {
    font-size: 20px;
    font-weight: 500;
}

.progress {
    width: 100%;
    border-radius: 10px;
    height: 8px;
}

.progress-bar {
    background-color: #ffd500;
}

.w-15 {
    width: 10%;
}

.reviewsBox2 {
    width: 225px;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    padding: 20px 15px;
}

.reviewsBoxInner-s1-h--a {
    font-weight: 500;
}

.reviewsBoxInner-row-input {
    display: none;
}

.reviewsBoxInner-label {
    width: 18px;
    height: 18px;
    border: 1px solid #cfcfcf;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.reviewsBoxInner-label div {
    width: 8px;
    height: 8px;
    background-color: #cfcfcf;
    border-radius: 50%;
    inset: 0;
    z-index: 1;
}

input.reviewsBoxInner-row-input[type="radio"]:checked+.reviewsBoxInner-label {
    border-color: #0aacde;
}

input.reviewsBoxInner-row-input[type="radio"]:checked+.reviewsBoxInner-label div {
    background-color: #0aacde;
}

.reviewsBox {
    width: 330px;
}

.reviews-wrpr2 {
    margin-bottom: 25px;
}

.reviews-wrpr2-row {
    column-gap: 15px;
    margin-bottom: 15px;
}

.reviews-wrpr2Box {
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: #06a110;
    background-color: #e4f6e5;
    border-radius: 50%;
}

.reviews-wrpr2Box-h {
    font-size: 16px;
    color: #040404;
    font-weight: 500;
    margin-bottom: 5px;
}

.rat-li-cmt i {
    color: #ffd500;
    font-size: 14px;
}

.reviews-wrpr2-p {
    font-size: 14px;
    color: #9a9a9a;
}

.reviews-wrpr2-row-p {
    font-size: 14px;
    color: #080808;
    line-height: 1.6;
    font-weight: 500;
}

.reviews-wrpr2-box {
    max-width: 100%;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #f3f3f3;
}

.reviews-wrpr2-box-holder {
    max-width: 400px;
}

.reviews-wrpr2-btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #e4f6e5;
    color: #06a110;
    margin-inline: auto;
    font-size: 11px;
    cursor: pointer;
}

.reviews-wrpr2-btn.active {
    transform: rotate(180deg);
}

.reviews-wrpr2-box {
    display: none;
}

.reviews-wrpr2-btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #e4f6e5;
    color: #06a110;
    margin-inline: auto;
    font-size: 11px;
    cursor: pointer;
}

.proDetCmnt-cntnt-wrpr {
    margin-bottom: 70px;
}

.simiPro-slider .subpage-prdts-card {
    margin: 0 auto;
}

.zoommdl-slider .swiper-wrapper {
    align-items: center;
}

@media (max-width:1799px) {
    .proDetCmnt {
        padding: 20px 0;
    }
}

@media (max-width:1599px) {
    .proDetCmnt-col1-tab {
        padding: 8px 15px;
        border-radius: 5px;
        margin-bottom: 15px;
        font-size: 16px;
    }

    .proDetCmnt-cntnt-box {
        margin-bottom: 27px;
    }

    .proDetCmnt-col2 {
        padding: 25px 0px 0 20px;
    }

    .reviewsBox3-textarea {
        padding: 14px 13px;
        font-size: 15px;
        height: 178px;
    }

    .proDetCmnt-cntnt-b1 {
        width: 465px;
    }

    .reviewsBox3-row-inn {
        font-size: 15px;
        padding: 10px 10px;
        width: 65%;
    }

    .reviewsBox3-row-inn2 {
        font-size: 14px;
        padding: 10px 15px;
    }

    .reviewsBox2 {
        width: 195px;
        padding: 18px 12px;
    }

    .rating li img {
        width: 16px;
    }

    .reviewsBox {
        width: 270px;
    }

    .proDetCmnt-cntnt-wrpr {
        margin-bottom: 40px;
    }
}

@media (max-width:1399px) {
    .reviewsBox {
        width: 200px;
    }

    .reviewsBoxInner-s1 svg {
        width: 25px;
    }

    .proDetCmnt-cntnt-b1 {
        width: 410px;
    }

    .reviewsBox3-row-inn {
        width: 77%;
    }
}

@media (max-width:1199px) {
    .proDetCmnt-cntnt-wrpr {
        flex-wrap: wrap;
        row-gap: 25px;
    }

    .proDetCmnt-cntnt-wrpr {
        margin-bottom: 20px;
    }
}

@media (max-width:767px) {
    .proDetCmnt-wrpr {
        flex-wrap: wrap;
    }

    .proDetCmnt-col1 {
        width: 100%;
    }

    .proDetCmnt-col1 {
        padding: 20px 0 5px 0;
        border-right: none;
        border-bottom: 1px solid #caedfb;
        margin-bottom: 20px;
    }

    .rtl .proDetCmnt-col1 {
        border-left: 0;
    }

    .proDetailsPage {
        padding: 35px 0 0px 0;
    }

    .proDetCmnt-col2 {
        width: 100%;
        padding: 0;
    }

    .reviewsBox-seprator {
        display: none;
    }

    .proDetCmnt-cntnt-b1 {
        width: 100%;
    }

    .rtl .proDetCmnt-col2 {
        padding: 0;
    }

    .rtl .proDetCmnt-col1 {
        border-left: none;
    }

    .rtl .proDetCmnt-wrpr {
        border-top: none;
    }
}


@media (max-width:539px) {
    .proDetCmnt-cntnt-heading {
        font-size: 14px;
        width: 90px;
    }

    .proDetCmnt-cntnt-desc {
        width: calc(100% - 100px);
    }

    .proDetCmnt-cntnt-desc {
        font-size: 14px;
    }

    .proDetCmnt-cntnt-h {
        font-size: 16px;
        margin-bottom: 0px;
    }

    .proDetCmnt-cntnt-box {
        margin-bottom: 20px;
    }

    .reviewsBox3-row-inn {
        width: 80%;
    }

    .reviewsBox3-row-inn {
        font-size: 12px;
    }

    .reviewsBox3-row {
        column-gap: 5px !important;
    }

    .reviewsBox3-row-inn2 {
        width: 22%;
        padding: 9px 2px;
        font-size: 12px;
    }

    .reviewsBox,
    .reviewsBox2 {
        margin: 0 auto;
    }
}
</style>