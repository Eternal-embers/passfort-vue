<template>
  <div class="confirmation-form">
    <div class="tip">
      <div class="tip-content">亲爱的用户，为了保障您的账户安全，请仔细检查以下信息是否准确。在找回密码时，这些信息将作为重要依据，请务必认真核对后再提交哦！</div>
    </div>

    <div class="confirmation-content">
      <div class="required-info">
        <h3>必填信息</h3>
        <div class="form-item">
          <label>姓名：</label>
          <span>{{ fullName }}</span>
        </div>
        <div class="form-item">
          <label>身份证号：</label>
          <span>{{ idCardNumber }}</span>
        </div>
        <div class="form-item">
          <label>手机号：</label>
          <span>{{ phoneNumber }}</span>
        </div>
        <div class="form-item">
          <label>恢复邮箱：</label>
          <span>{{ recoveryEmail }}</span>
        </div>
        <div class="form-item">
          <label>验证码：</label>
          <span>{{ verificationCode }}</span>
        </div>
        <div class="form-item">
          <label>安全问题：</label>
          <div class="security-questions" v-for="(question, index) in securityQuestionsData" :key="index">
            <div v-if="question.customQuestion">
              <span>{{ question.customQuestion }}</span>
              <span>答案：{{ question.answer }}</span>
            </div>
            <div v-else-if="question.question">
              <span>{{ question.question }}</span>
              <span>答案：{{ question.answer }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="optional-info">
        <h3>可选信息</h3>
        <div class="form-item" v-if="highSchoolName">
          <label>高中名称：</label>
          <span>{{ highSchoolName }}</span>
        </div>
        <div class="form-item" v-if="hometown">
          <label>家乡：</label>
          <span>{{ hometown }}</span>
        </div>
        <div class="form-item" v-if="occupation">
          <label>职业：</label>
          <span>{{ occupation }}</span>
        </div>
        <div class="form-item" v-if="fatherName">
          <label>父亲姓名：</label>
          <span>{{ fatherName }}</span>
        </div>
        <div class="form-item" v-if="motherName">
          <label>母亲姓名：</label>
          <span>{{ motherName }}</span>
        </div>
        <div class="form-item" v-if="!highSchoolName && !hometown && !occupation && !fatherName && !motherName">
          <span>无可选信息</span>
        </div>
      </div>
    </div>

    <button
      class="back-button"
      @click="$emit('goBack')"
      v-if="!isActivationDataValid"
    >
      跳转至未完成步骤
    </button>

    <button 
      class="submit-button"
      @click="submitConfirmation" 
      :disabled="!isActivationDataValid">
      提交
    </button>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useActivationDataStore } from '@/stores/activationData';
export default {
  setup() {
    // 导入 Pinia store
    const activationDataStore = useActivationDataStore();

    // 将 store 的属性解构为响应式引用
    const { recoveryEmail, verificationCode, securityQuestionsData, fullName, idCardNumber, phoneNumber, highSchoolName, hometown, occupation, motherName, fatherName } = storeToRefs(activationDataStore);

    // 使用 storeToRefs 将 store 的getter解构为响应式引用
    const { isActivationDataValid } = storeToRefs(activationDataStore);

    return {
      recoveryEmail,            // 恢复邮箱
      verificationCode,         // 验证码
      securityQuestionsData,    // 安全问题
      fullName,                 // 姓名
      idCardNumber,             // 身份证号
      phoneNumber,              // 手机号
      highSchoolName,           // 高中名称
      hometown,                 // 家乡
      occupation,               // 工作
      motherName,          // 母亲姓名
      fatherName,          // 父亲姓名
      isActivationDataValid    // 激活数据是否有效
    };
  }
};
</script>

<style scoped>
.confirmation-form {
  max-width: 50em;
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 0.5em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.confirmation-form .tip {
  background-color:  rgba(0, 0, 0, 0.05);
  border-left: 3px solid #28a745;
  padding: 10px;
  margin-bottom: 20px;
}

.tip .tip-content {
  font-size: 14px;
  color: #666;
}

.confirmation-content {
  margin-bottom: 20px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #2c3e50;
}

.form-item {
  margin-bottom: 10px;
}

label {
  font-size: 14px;
  color: #555;
  display: inline-block;
  width: 5em;
  margin-right: 0.5em;
}

span {
  font-size: 14px;
  color: #333;
}

.security-questions {
  margin-left: 5em;
}

.security-questions div {
  margin-bottom: 5px;
}

button{
  display: block;
  width: 100%;
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button {
  background-color: #7dc8a0;
  margin-bottom: 1em;
}

.back-button:hover {
  background-color: #5cbf8c;
}

.submit-button {
  background-color: #42b983;
}

.submit-button:hover {
  background-color: #3498db;
}

.submit-button:disabled{
  background-color: #ccc;
  cursor: not-allowed;
}
</style>