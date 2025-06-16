<template>
  <div class="personal-info-form">
    <div class="tip">
      <div class="tip-content">您的个人信息仅在身份验证时被使用，我们使用哈希加密技术处理您的个人信息，以确保您的隐私安全。</div>
    </div>

    <div class="form-group">
      <div>
        <label for="fullName">姓名:</label>
        <input type="text" id="fullName" v-model="fullName" />
      </div>
      <div>
        <label for="idCardNumber">身份证号:</label>
        <input type="text" id="idCardNumber" v-model="idCardNumber" />
      </div>
      <div>
        <label for="phoneNumber">手机号:</label>
        <input type="text" id="phoneNumber" v-model="phoneNumber" />
      </div>
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

    // 使用 storeToRefs 将 store 的属性解构为响应式引用
    const { fullName, idCardNumber, phoneNumber } = storeToRefs(activationDataStore);

    return {
      fullName,
      idCardNumber,
      phoneNumber
    };
  }
};
</script>

<style scoped>
/* 整体布局和背景 */
.personal-info-form {
  max-width: 30em;
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 0.5em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.personal-info-form .tip {
  width: 25em;    
  background-color:  rgba(0, 0, 0, 0.05);
  border-left: 3px solid #28a745;
  padding: 10px;
  margin-bottom: 20px;
}

.tip .tip-content {
  font-size: 14px;
  color: #666;
}

/* 表单组样式 */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 标签样式 */
.form-group label {
  display: inline-block;
  width: 5em;
  font-size: 12px;
  color: #333;
}

.form-group input {
  width: 24.5em;
  padding: 0.5em; 
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}

/* 输入框聚焦时的样式 */
.form-group input:focus {
  outline: none;
  border-color: #28a745;
  box-shadow: 0 0 4px #28a745;
}
</style>