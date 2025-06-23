<template>
    <component v-if="popup.isPopup" :is="popup.popupComponent" :type="popup.popupType">{{ popup.message }}</component>
    <div id="authentication-page">
        <div class="main">
            <!-- 注册卡片 -->
            <div class="container a-container" :class="{'is-txl': isToggled }">
                <form class="form" @submit.prevent="signUp">
                    <h2 class="form_title title">创建帐号</h2>
                    <div class="form__icons">
                        <svg t="1746964345903" class="form__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2379">
                            <path d="M290.907021 294.935266c0-13.697977-4.168949-24.714891-12.506848-33.05279s-19.354813-12.506848-33.05279-12.506848c-14.292518 0-26.799366 4.466732-37.519522 13.400195-10.720156 8.933463-16.376992 19.652596-16.972557 32.159444 0 13.101389 5.65786 23.821545 16.972557 32.159444 11.31572 8.336876 23.821545 12.505825 37.519522 12.505825 13.697977 0 24.714891-3.870144 33.05279-11.612479C286.738072 320.244698 290.907021 309.228807 290.907021 294.935266zM660.736021 547.741016c0-8.93244-4.168949-17.270339-12.506848-25.01165-8.337899-7.740288-19.058055-11.316743-32.160467-10.721179-9.529027 0-17.865903 3.871167-25.01165 11.615549-7.144724 7.740288-11.017938 15.781428-11.613502 24.11728 0 9.530051 3.870144 17.86795 11.613502 25.012673 7.741311 7.145747 16.07921 11.018961 25.01165 11.613502 13.102413 0 23.820522-3.572362 32.160467-10.720156C656.567072 566.501288 660.736021 557.864584 660.736021 547.741016zM543.712771 294.935266c0-13.697977-4.167926-24.714891-12.505825-33.05279-8.337899-8.336876-19.355837-12.506848-33.05279-12.506848-14.293541 0-26.799366 4.466732-37.519522 13.400195-10.721179 8.933463-16.07921 19.652596-16.07921 32.159444 0 13.101389 5.358031 23.821545 16.07921 32.159444 10.720156 8.337899 23.225981 12.505825 37.519522 12.505825 13.696953 0 24.713868-3.870144 33.05279-11.612479C539.543821 320.244698 543.712771 309.228807 543.712771 294.935266zM859.944062 547.741016c0-8.93244-4.466732-17.270339-13.400195-25.01165-8.933463-7.740288-19.653619-11.316743-32.159444-10.721179-8.933463 0-16.974603 3.871167-24.119327 11.615549-7.145747 7.740288-11.018961 15.781428-11.614525 24.11728 0 9.530051 3.871167 17.86795 11.614525 25.012673 7.742335 7.145747 15.782451 11.018961 24.119327 11.613502 13.101389 0 23.819498-3.572362 32.159444-10.720156C854.881766 566.501288 859.347474 557.864584 859.944062 547.741016zM726.840578 350.319667c-10.124592-1.785669-21.73707-2.679016-34.839483-2.679016-55.979966 0-107.494223 12.803607-154.540725 38.411845-47.048549 25.607214-84.270289 60.446697-111.663172 104.517425-27.39493 44.068681-40.794102 91.713818-40.199561 142.930293 0 26.201755 3.871167 51.514257 11.612479 75.931367-11.910261 1.191128-23.224957 1.784646-33.945113 1.784646-8.93244 0-17.270339-0.297782-25.01165-0.893346-7.741311-0.594541-16.972557-1.784646-27.693736-3.571339-10.720156-1.786693-18.163685-2.977821-22.332634-3.573385-4.168949-0.594541-13.101389-2.382257-26.799366-5.360078-13.696953-2.976798-22.034852-4.465708-25.012673-4.465708l-125.95569 62.531172 35.731806-108.089787C49.71375 579.900459 1.475096 498.312256 1.475096 403.026076c0-55.980989 16.07921-107.494223 48.238654-154.541749 32.159444-47.047526 76.229149-84.269265 132.210138-111.663172 55.979966-27.39493 116.427686-40.794102 181.341115-40.198537 58.362222 0 113.449865 10.720156 165.262928 32.159444 51.811016 21.439288 95.285157 51.812039 130.422422 91.117231C694.087617 259.204483 716.71701 302.676577 726.840578 350.319667L726.840578 350.319667zM1022.524904 629.925806c0 38.709627-11.31572 75.632561-33.946137 110.769826-22.629393 35.136242-53.597709 67.295686-92.9029 96.476285l27.693736 90.223884-99.157347-53.597709c-50.025347 11.911284-86.352717 17.865903-108.983133 17.865903-55.979966 0-107.494223-11.614525-154.540725-34.840506-47.049572-23.223934-84.270289-55.085596-111.664196-95.582939-27.39493-40.495296-41.092907-84.270289-41.092907-131.314745 0-47.050596 13.696953-91.118254 41.092907-132.210138 27.39493-41.091884 64.615647-72.655763 111.664196-94.690616 47.047526-22.034852 98.559736-33.945113 154.540725-35.731806 53.598732 0 103.923908 11.911284 150.969387 35.731806 47.047526 23.821545 84.863806 55.683207 113.449865 95.583962C1008.23341 538.50977 1022.524904 582.282716 1022.524904 629.925806z" p-id="2380"></path>
                        </svg>
                        <svg t="1746964180494" class="form__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4489">
                            <path d="M980.79827 694.105946c-21.144216-122.796973-109.844757-203.250162-109.844757-203.250162 12.647784-111.477622-33.792-131.26573-33.792-131.26573C827.392 14.668108 530.985514 20.67373 524.730811 20.839784 518.476108 20.67373 222.01427 14.668108 212.300108 359.590054c0 0-46.467459 19.788108-33.819676 131.26573 0 0-88.700541 80.453189-109.817081 203.250162 0 0-11.291676 207.484541 101.403676 25.40627 0 0 25.350919 69.161514 71.790703 131.26573 0 0-83.082378 28.256865-75.997405 101.625081 0 0-2.87827 81.836973 177.401081 76.218811 0 0 126.699243-9.852541 164.753297-63.515676l16.605405 0 0.276757 0 16.633081 0c38.026378 53.635459 164.725622 63.515676 164.725622 63.515676 180.224 5.618162 177.401081-76.218811 177.401081-76.218811 7.029622-73.368216-75.997405-101.625081-75.997405-101.625081 46.439784-62.104216 71.790703-131.26573 71.790703-131.26573C992.034595 901.590486 980.79827 694.105946 980.79827 694.105946z" p-id="4490"></path>
                        </svg>
                        <svg t="1746964210979" class="form__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5537">
                            <path d="M801.122375 623.063515c129.089054 42.951231 158.347424 45.280276 158.347424 45.280276V206.368114c0-78.849836-64.191998-142.731772-143.519717-142.731771H206.639802c-79.317487 0-143.583163 63.882959-143.583162 142.731771V811.863509c0 78.805834 64.246233 142.716422 143.602605 142.716422h609.29186c79.286788 0 143.519718-63.910589 143.519718-142.716422v-5.852289s-233.164411-96.585779-350.918302-152.878876c-78.948073 96.547917-180.819229 155.181315-286.582017 155.181315-178.829921 0-239.584634-155.561985-154.894789-257.958096 18.47784-22.293749 49.870828-43.636846 98.65081-55.5819 76.236312-18.632359 197.624986 11.618619 311.360354 48.943713a618.711394 618.711394 0 0 0 50.503231-122.651435H277.018709v-35.311227h180.747597v-63.237253h-218.915895v-35.339879h218.915895v-90.223885s0-15.210423 15.510252-15.210423h88.346118v105.45375h216.455867v35.320437H561.623699v63.237253h176.662559c-16.890692 68.844971-42.575678 132.220371-74.795497 187.850366 53.598732 19.249413 101.770871 37.514405 137.613195 49.459458h0.018419v-0.001023z m-520.194636-75.483158c-22.395056 2.222621-64.425312 12.06478-87.411839 32.27303-68.927859 59.700707-27.699875 168.900781 111.77369 168.900782 81.035618 0 162.054863-51.537793 225.675855-133.986597-90.480734-43.903929-167.177534-75.332732-250.019286-67.187215h-0.01842z" p-id="5538"></path>
                        </svg>
                    </div>    
                    <span class="form__span"> 或使用邮箱注册</span>
                    <input class="form__input" type="text" v-model="register.email" placeholder="邮箱" pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" required>
                    <input class="form__input" type="password" v-model="register.password" placeholder="密码" data="passworedtype" minlength="8" maxlength="64" required>
                    <input class="form__input" type="password" v-model="register.confirmPassword" placeholder="确认密码" data="passworedtype" minlength="8" maxlength="64" required>
                    <div class="verification">
                        <input class="verification__input form__input" type="text" v-model="register.code" placeholder="验证码" required>
                        <button class="verification__button" 
                                type="button" 
                                @click="getRegisterCode" 
                                :disabled="register.isSending">
                                {{ register.codeButtonText }}
                        </button>
                    </div>
                    <button class="button">注册</button>
                </form>
            </div>

            <!-- 登录卡片 -->
            <div class="container b-container" :class="{ 'is-txl': isToggled, 'is-z200': isToggled}">
                <form class="form" @submit.prevent="signIn">
                    <h2 class="form_title title">登录网站</h2>
                    <div class="form__icons">
                        <svg t="1746964345903" class="form__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2379">
                            <path d="M290.907021 294.935266c0-13.697977-4.168949-24.714891-12.506848-33.05279s-19.354813-12.506848-33.05279-12.506848c-14.292518 0-26.799366 4.466732-37.519522 13.400195-10.720156 8.933463-16.376992 19.652596-16.972557 32.159444 0 13.101389 5.65786 23.821545 16.972557 32.159444 11.31572 8.336876 23.821545 12.505825 37.519522 12.505825 13.697977 0 24.714891-3.870144 33.05279-11.612479C286.738072 320.244698 290.907021 309.228807 290.907021 294.935266zM660.736021 547.741016c0-8.93244-4.168949-17.270339-12.506848-25.01165-8.337899-7.740288-19.058055-11.316743-32.160467-10.721179-9.529027 0-17.865903 3.871167-25.01165 11.615549-7.144724 7.740288-11.017938 15.781428-11.613502 24.11728 0 9.530051 3.870144 17.86795 11.613502 25.012673 7.741311 7.145747 16.07921 11.018961 25.01165 11.613502 13.102413 0 23.820522-3.572362 32.160467-10.720156C656.567072 566.501288 660.736021 557.864584 660.736021 547.741016zM543.712771 294.935266c0-13.697977-4.167926-24.714891-12.505825-33.05279-8.337899-8.336876-19.355837-12.506848-33.05279-12.506848-14.293541 0-26.799366 4.466732-37.519522 13.400195-10.721179 8.933463-16.07921 19.652596-16.07921 32.159444 0 13.101389 5.358031 23.821545 16.07921 32.159444 10.720156 8.337899 23.225981 12.505825 37.519522 12.505825 13.696953 0 24.713868-3.870144 33.05279-11.612479C539.543821 320.244698 543.712771 309.228807 543.712771 294.935266zM859.944062 547.741016c0-8.93244-4.466732-17.270339-13.400195-25.01165-8.933463-7.740288-19.653619-11.316743-32.159444-10.721179-8.933463 0-16.974603 3.871167-24.119327 11.615549-7.145747 7.740288-11.018961 15.781428-11.614525 24.11728 0 9.530051 3.871167 17.86795 11.614525 25.012673 7.742335 7.145747 15.782451 11.018961 24.119327 11.613502 13.101389 0 23.819498-3.572362 32.159444-10.720156C854.881766 566.501288 859.347474 557.864584 859.944062 547.741016zM726.840578 350.319667c-10.124592-1.785669-21.73707-2.679016-34.839483-2.679016-55.979966 0-107.494223 12.803607-154.540725 38.411845-47.048549 25.607214-84.270289 60.446697-111.663172 104.517425-27.39493 44.068681-40.794102 91.713818-40.199561 142.930293 0 26.201755 3.871167 51.514257 11.612479 75.931367-11.910261 1.191128-23.224957 1.784646-33.945113 1.784646-8.93244 0-17.270339-0.297782-25.01165-0.893346-7.741311-0.594541-16.972557-1.784646-27.693736-3.571339-10.720156-1.786693-18.163685-2.977821-22.332634-3.573385-4.168949-0.594541-13.101389-2.382257-26.799366-5.360078-13.696953-2.976798-22.034852-4.465708-25.012673-4.465708l-125.95569 62.531172 35.731806-108.089787C49.71375 579.900459 1.475096 498.312256 1.475096 403.026076c0-55.980989 16.07921-107.494223 48.238654-154.541749 32.159444-47.047526 76.229149-84.269265 132.210138-111.663172 55.979966-27.39493 116.427686-40.794102 181.341115-40.198537 58.362222 0 113.449865 10.720156 165.262928 32.159444 51.811016 21.439288 95.285157 51.812039 130.422422 91.117231C694.087617 259.204483 716.71701 302.676577 726.840578 350.319667L726.840578 350.319667zM1022.524904 629.925806c0 38.709627-11.31572 75.632561-33.946137 110.769826-22.629393 35.136242-53.597709 67.295686-92.9029 96.476285l27.693736 90.223884-99.157347-53.597709c-50.025347 11.911284-86.352717 17.865903-108.983133 17.865903-55.979966 0-107.494223-11.614525-154.540725-34.840506-47.049572-23.223934-84.270289-55.085596-111.664196-95.582939-27.39493-40.495296-41.092907-84.270289-41.092907-131.314745 0-47.050596 13.696953-91.118254 41.092907-132.210138 27.39493-41.091884 64.615647-72.655763 111.664196-94.690616 47.047526-22.034852 98.559736-33.945113 154.540725-35.731806 53.598732 0 103.923908 11.911284 150.969387 35.731806 47.047526 23.821545 84.863806 55.683207 113.449865 95.583962C1008.23341 538.50977 1022.524904 582.282716 1022.524904 629.925806z" p-id="2380"></path>
                        </svg>
                        <svg t="1746964180494" class="form__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4489">
                            <path d="M980.79827 694.105946c-21.144216-122.796973-109.844757-203.250162-109.844757-203.250162 12.647784-111.477622-33.792-131.26573-33.792-131.26573C827.392 14.668108 530.985514 20.67373 524.730811 20.839784 518.476108 20.67373 222.01427 14.668108 212.300108 359.590054c0 0-46.467459 19.788108-33.819676 131.26573 0 0-88.700541 80.453189-109.817081 203.250162 0 0-11.291676 207.484541 101.403676 25.40627 0 0 25.350919 69.161514 71.790703 131.26573 0 0-83.082378 28.256865-75.997405 101.625081 0 0-2.87827 81.836973 177.401081 76.218811 0 0 126.699243-9.852541 164.753297-63.515676l16.605405 0 0.276757 0 16.633081 0c38.026378 53.635459 164.725622 63.515676 164.725622 63.515676 180.224 5.618162 177.401081-76.218811 177.401081-76.218811 7.029622-73.368216-75.997405-101.625081-75.997405-101.625081 46.439784-62.104216 71.790703-131.26573 71.790703-131.26573C992.034595 901.590486 980.79827 694.105946 980.79827 694.105946z" p-id="4490"></path>
                        </svg>
                        <svg t="1746964210979" class="form__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5537">
                            <path d="M801.122375 623.063515c129.089054 42.951231 158.347424 45.280276 158.347424 45.280276V206.368114c0-78.849836-64.191998-142.731772-143.519717-142.731771H206.639802c-79.317487 0-143.583163 63.882959-143.583162 142.731771V811.863509c0 78.805834 64.246233 142.716422 143.602605 142.716422h609.29186c79.286788 0 143.519718-63.910589 143.519718-142.716422v-5.852289s-233.164411-96.585779-350.918302-152.878876c-78.948073 96.547917-180.819229 155.181315-286.582017 155.181315-178.829921 0-239.584634-155.561985-154.894789-257.958096 18.47784-22.293749 49.870828-43.636846 98.65081-55.5819 76.236312-18.632359 197.624986 11.618619 311.360354 48.943713a618.711394 618.711394 0 0 0 50.503231-122.651435H277.018709v-35.311227h180.747597v-63.237253h-218.915895v-35.339879h218.915895v-90.223885s0-15.210423 15.510252-15.210423h88.346118v105.45375h216.455867v35.320437H561.623699v63.237253h176.662559c-16.890692 68.844971-42.575678 132.220371-74.795497 187.850366 53.598732 19.249413 101.770871 37.514405 137.613195 49.459458h0.018419v-0.001023z m-520.194636-75.483158c-22.395056 2.222621-64.425312 12.06478-87.411839 32.27303-68.927859 59.700707-27.699875 168.900781 111.77369 168.900782 81.035618 0 162.054863-51.537793 225.675855-133.986597-90.480734-43.903929-167.177534-75.332732-250.019286-67.187215h-0.01842z" p-id="5538"></path>
                        </svg>
                    </div>
                    <span class="form__span"> 或使用邮箱登录</span>
                    <input class="form__input" v-model="login.email" type="text" placeholder="邮箱" pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" required>
                    <input class="form__input" v-model="login.password" type="password" placeholder="密码" required>
                    <div class="verification">
                        <input class="verification__input form__input" v-model="login.code" type="text" placeholder="验证码" required>
                        <button class="verification__button"
                                type="button"
                                @click="getVerificationCode"
                                :disabled="login.isSending">
                                {{ login.codeButtonText }}
                        </button>
                    </div>
                    <a class="form__link" href="#forget_password">忘记密码？</a>
                    <button class="button">登录</button>
                </form>
            </div>

            <!-- 切换部分 -->
            <div class="switch" id="switch-cnt" :class="{ 'is-gx': isAnimating, 'is-txr': isToggled }">
                <div class="switch__circle" :class="{ 'is-txr': isToggled }"></div>
                <div class="switch__circle switch__circle--t" :class="{ 'is-txr': isToggled }"></div>
                <div class="switch__container" id="switch-c1" :class="{ 'is-hidden': isToggled }">
                    <h2 class="switch__title title">欢迎回来！</h2>
                    <p class="switch__description description">为了保持与我们的联系，请使用您的个人信息登录。</p>
                    <button class="switch__button button switch-btn" @click="toggleForm">登录</button>
                </div>
                <div class="switch__container" id="switch-c2" :class="{ 'is-hidden': !isToggled }">
                    <h2 class="switch__title title">你好，朋友！</h2>
                    <p class="switch__description description">输入您的个人信息，开始与我们一同前行。</p>
                    <button class="switch__button button switch-btn" @click="toggleForm">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { apiEndpoints } from '@/api/api';

export default {
    data() {
        return {
            popup: {
                isPopup: false, // 控制弹窗显示状态
                popupComponent: 'Popup', //弹窗组件
                popupType: '', //弹窗类型
                message: '', //弹窗消息
            },
            register: {
                email: '',
                password: '',
                confirmPassword: '',
                code: '',
                codeKey: '', // 用于存储发送验证码时返回的 codeKey
                isSending: false, // 控制验证码发送状态
                codeButtonText: '获取验证码' // 验证码按钮文本
            },
            login: {
                email: '',
                password: '',
                code: '',
                codeKey: '', // 用于存储发送验证码时返回的 codeKey
                isSending: false, // 控制验证码发送状态
                codeButtonText: '获取验证码' // 验证码按钮文本
            },
            isToggled: false, // 控制切换状态
            isAnimating: false // 控制动画状态
        };
    },
    methods: {
        // 切换登录和注册表单
        toggleForm() {
            this.isAnimating = true; // 开始动画
            setTimeout(() => {
            this.isAnimating = false; // 结束动画
            }, 1500);
            this.isToggled = !this.isToggled; // 切换状态
        },
        // 弹出弹窗
        async createPopup(type = 'info', message) {
            this.popup.isPopup = true;
            this.popup.popupType = type;
            this.popup.message = message;
            setTimeout(() => {
                this.popup.isPopup = false;
            }, 10000); // 弹窗显示 10 秒
        },
        // 发送注册验证码邮件
        async getRegisterCode() {
            // 检查邮箱格式
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.register.email)) {
                this.createPopup('warning', "请输入有效的邮箱地址。");
                return;
            }

            //验证发送按钮 60 s 倒计时
            this.register.isSending = true;
            let countdown = 60;
            const interval = setInterval(() => {
                countdown--;
                this.register.codeButtonText = `${countdown} s`;
                if (countdown <= 0) {
                    clearInterval(interval);
                    this.register.isSending = false;
                    this.register.codeButtonText = '重新获取';
                }
            }, 1000);

            // 请求发送验证码
            axios(apiEndpoints.sendRegisterEmail(this.register.email))
                .then(response => {
                    if (response.data.code === 200) {
                        this.register.codeKey = response.data.data; // 存储 codeKey
                        this.createPopup('success', "验证码已发送到您的邮箱，请注意查收。");
                    } else {
                        this.register.isSending = false; // 停止发送状态
                        this.register.codeButtonText = '重新获取';
                        this.createPopup('error', "验证码发送失败，请稍后再试。");
                        console.error(response.data.msg);
                    }
                });
        },
        // 发送登录验证码邮件
        async getVerificationCode() {
            // 检查邮箱格式
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.login.email)) {
                this.createPopup('warning', "请输入有效的邮箱地址。");
                return;
            }

            //验证发送按钮 60 s 倒计时
            this.login.isSending = true;
            let countdown = 60;
            const interval = setInterval(() => {
                countdown--;
                this.login.codeButtonText = `${countdown} s`;
                if (countdown <= 0) {
                    clearInterval(interval);
                    this.login.isSending = false;
                    this.login.codeButtonText = '重新获取';
                }
            }, 1000);

            // 请求发送验证码
            axios(apiEndpoints.sendVerificationEmail(this.login.email, "login"))
                .then(response => {
                    if (response.data.code === 200) {
                        this.login.codeKey = response.data.data; // 存储 codeKey
                        this.createPopup('success', "验证码已发送到您的邮箱，请注意查收。");
                    } else {
                        this.login.isSending = false; // 停止发送状态
                        this.login.codeButtonText = '重新获取';
                        this.createPopup('error', "验证码发送失败，请稍后再试。");
                        console.error(response.data.msg);
                    }
                });
        },
        // 注册
        signUp() {
            // 检查密码和确认密码是否匹配
            if (this.register.password !== this.register.confirmPassword) {
                this.createPopup('warning', "密码和确认密码不匹配，请重新输入。");
                return;
            }

            // 检查密码强度
            const password = this.register.password;
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'"\\|,.<>\/?]).{8,}$/;
            if (!passwordRegex.test(password)) {
                this.createPopup('warning', "密码格式不正确。密码必须至少包含一个字母、一个数字和一个特殊字符，且长度至少为8位。");
                this.register.password = '';
                this.register.confirmPassword = '';
                return;
            }

            // 发起注册请求
            axios(apiEndpoints.userRegister(this.register.email, this.register.password, this.register.code, this.register.codeKey))
                .then(response => {
                    if (response.data.code === 200) {
                        this.createPopup('success', "注册成功，请登录。");
                        // 清空注册表单
                        this.register.email = '';
                        this.register.password = '';
                        this.register.confirmPassword = '';
                        this.register.code = '';
                        this.register.codeKey = '';
                    } else if (response.data.data === "email_already_registered") {
                        this.createPopup('warning', "该邮箱已被注册，请尝试其他邮箱。");
                        this.register.email = '';
                        this.register.password = '';
                        this.register.confirmPassword = '';
                        this.register.code = '';
                        this.register.codeKey = '';
                    } else if (response.data.data = "code_error") {
                        this.createPopup('warning', "验证码错误,请重新输入。");
                        this.register.code = '';
                    } else if (response.data.data === "code_expired") {
                        this.createPopup('warning', "验证码已过期，请重新获取。");
                        this.register.code = '';
                    } else {
                        this.createPopup('error', "注册失败，请稍后再试。");
                        console.error("Registration failed:", response.data.msg);
                    }
                });
        },
        // 登录
        signIn() {
            axios(apiEndpoints.userLogin(this.login.email, this.login.password, this.login.code, this.login.codeKey))
                .then(response => {
                    if (response.data.code === 200) {
                        this.createPopup('success', "登录成功，欢迎回来！");
                        // 清空登录表单
                        this.login.email = '';
                        this.login.password = '';
                        this.login.code = '';
                        this.login.codeKey = '';
                        // 记录用户登录状态
                    } else if (response.data.data === "user_not_found") {
                        this.createPopup('warning', "该邮箱未注册，请先注册。");
                        this.login.email = '';
                    } else if (response.data.data === "account_locked") {
                        this.createPopup('warning', "您的账户已被冻结，请通过申诉解冻。");
                        this.login.email = '';
                    } else if (response.data.data === "password_error") {
                        this.createPopup('warning', "密码错误，请重新输入。");
                        this.login.password = '';
                    } else if (response.data.data === "code_error") {
                        this.createPopup('warning', "验证码错误，请重新输入。");
                        this.login.code = '';
                    } else if (response.data.data === "code_expired") {
                        this.createPopup('warning', "验证码已过期，请重新获取。");
                        this.login.code = '';
                    } else {
                        this.createPopup('error', "登录失败，请稍后再试。");
                        console.error("Login failed:", response.data.msg);
                    }
                });
        }
    }
};
</script>

<style lang="css" scoped>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

/* Generic */
#authentication-page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    background-color: #ecf0f3;
    color: #a0a5a8;
}

.main {
    position: relative;
    width: 1000px;
    min-width: 1000px;
    min-height: 600px;
    height: 600px;
    padding: 25px;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
}

@media (max-width: 1200px) {
    .main {
        transform: scale(0.7);
    }
}
@media (max-width: 1000px) {
    .main {
        transform: scale(0.6);
    }
}
@media (max-width: 800px) {
    .main {
        transform: scale(0.5);
    }
}
@media (max-width: 600px) {
    .main {
        transform: scale(0.4);
    }
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 600px;
    height: 100%;
    padding: 25px;
    background-color: #ecf0f3;
    transition: 1.25s;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.form__icon {
    width: 25px;
    margin: 0 5px;
    opacity: 0.5;
    transition: 0.15s;
}

.form__icon:hover {
    opacity: 1;
    transition: 0.15s;
    cursor: pointer;
}

/* 使用更精确的选择器来覆盖 .form__input */
.form .verification__input {
    width: 240px;
    margin-right: 10px;
}

.verification__button {
    width: 100px;
    height: 40px;
    border-radius: 4px;
    font-size: 13px;
    letter-spacing: 0.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), inset 0 -2px 4px rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
}

.verification__button:hover {
    background-color: #4063d0;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5), inset 0 -3px 6px rgba(255, 255, 255, 0.6);
}

.verification__button:active {
    transform: translateY(5px);
    background-color: #3552b8;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 2px rgba(255, 255, 255, 0.7);
}

.verification__button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
}

.form__input {
    width: 350px;
    height: 40px;
    margin: 4px 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

.form__input:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}
.form__span {
    margin-top: 30px;
    margin-bottom: 12px;
}
.form__link {
    color: #181818;
    font-size: 15px;
    margin-top: 25px;
    border-bottom: 1px solid #a0a5a8;
    line-height: 2;
    text-decoration: none;
}

.toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 16px;
    color: #888;
}

.title {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #181818;
}

.description {
    font-size: 14px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
}

.button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;
}

.button:active {
    transform: scale(0.95);
    box-shadow: 4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9;
    background-color: #3a58c2;
}

.a-container {
    z-index: 100;
    left: calc(100% - 600px);
}

.b-container {
    z-index: 0;
    left: calc(100% - 600px);
}

.switch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    padding: 50px;
    z-index: 200;
    transition: 1.25s;
    background-color: #ecf0f3;
    overflow: hidden;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
}
.switch__circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
    bottom: -60%;
    left: -60%;
    transition: 1.25s;
}
.switch__circle--t {
    top: -30%;
    left: 60%;
    width: 300px;
    height: 300px;
}
.switch__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;
    transition: 1.25s;
}

.switch__button {
    cursor: pointer;
}
.switch__button:hover {
    box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
    transform: scale(0.985);
    transition: 0.25s;
}
.switch__button:active, .switch__button:focus {
    box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
    transform: scale(0.97);
    transition: 0.25s;
}

.is-txr {
    left: calc(100% - 400px);
    transition: 1.25s;
    transform-origin: left;
}

.is-txl {
  left: 0;
  transition: 1.25s;
  transform-origin: right;
}

.is-z200 {
    z-index: 200;
    transition: 1.25s;
}

.is-hidden {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: 1.25s;
}

.is-gx {
    animation: is-gx 1.25s;
}

@keyframes is-gx {
    0%, 10%, 100% {
        width: 400px;
    }
    30%, 50% {
        width: 500px;
    }
}
</style>