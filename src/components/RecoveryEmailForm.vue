<template>
  <div class="container">
    <div class="tip">
      <div class="tip-content">请使用常用邮箱，以便找回密码时能快速验证身份。验证码有效期为10分钟，请及时使用。</div>
    </div>
    <div class="input-group">
      <label for="recoveryEmail">恢复邮箱:</label>
      <input type="email" id="recoveryEmail" v-model="recoveryEmail" class="input-field" />
    </div>
    <div class="input-group">
      <label for="verificationCode">验证码:</label>
      <input type="text" id="verificationCode" v-model="verificationCode" class="input-field" />
      <button @click="sendEmailCode" :disabled="isSendingCode" class="send-code-btn">
        {{ isSendingCode ? `${countdown} s` : '发送' }}
      </button>
    </div>
  </div>
</template>
  
<script>
import { storeToRefs } from 'pinia';
import { useActivationDataStore } from '@/stores/activationData';

export default {
  setup() {
    // 导入 Pinia store
    const activationDataStore = useActivationDataStore();

    // 使用 storeToRefs 将 store 的属性解构为为响应式引用
    const { recoveryEmail, verificationCode } = storeToRefs(activationDataStore);

    return {
      recoveryEmail,
      verificationCode,
    };
  },
  data() {
    return {
      isSendingCode: false,
      countdown: 60
    };
  },
  methods: {
    // 发送验证码
    async sendEmailCode() {
      if (this.isSendingCode) return;

      this.isSendingCode = true;
      this.countdown = 60;

      // 倒计时60秒
      const countdownInterval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(countdownInterval);
          this.isSendingCode = false;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.tip {
  background-color:  rgba(0, 0, 0, 0.05);
  border-left: 3px solid #28a745;
  padding: 10px;
  margin-bottom: 20px;
}

.tip-content {
  font-size: 14px;
  color: #666;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.input-group label {
  width: 4.5em;
  margin-right: 10px;
  font-size: 14px;
  color: #333;
}

.input-field {
  flex: 1;
  padding: 0.6em;
  border: 1px solid #ccc;
  font-size: 14px;
}

.input-field:focus {
  outline: none;
  border-color: #28a745;
}

.send-code-btn {
  width: 5em;
  padding: 0.6em 1em;
  margin-left: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.send-code-btn:hover {
  background-color: #218838;
  color: rgba(255, 255, 255, 0.8);
}

.send-code-btn:active {
  transform: translateY(5px);
}

.send-code-btn:disabled {
  background-color: #e0e0e0;
  color: rgba(0, 0, 0, 0.5) ;
  cursor: not-allowed;
}
</style>