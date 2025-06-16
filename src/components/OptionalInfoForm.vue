<template>
  <div class="optional-info-form">
    <div class="tip">
      <div class="tip-content">您填写的可选信息将用于找回密码时的身份验证，有助于提升账户安全。所有信息均会通过哈希加密技术处理，保障您的隐私安全。</div>
    </div>

    <div>
      <label for="highSchoolName">高中名称:</label>
      <input type="text" id="highSchoolName" v-model="highSchoolName" />
    </div>
    <div>
      <label for="hometown">家乡:</label>
      <input type="text" id="hometown" v-model="hometown" />
    </div>
    <div>
      <label for="occupation">工作:</label>
      <input type="text" id="occupation" v-model="occupation" />
    </div>
    <div>
      <label for="motherName">母亲姓名:</label>
      <input type="text" id="motherName" v-model="motherName" />
    </div>
    <div>
      <label for="fatherName">父亲姓名:</label>
      <input type="text" id="fatherName" v-model="fatherName" />
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
    const { highSchoolName, hometown, occupation, motherName, fatherName } = storeToRefs(activationDataStore);

    return {
      highSchoolName,
      hometown,
      occupation,
      motherName,
      fatherName
    };
  }
};
</script>

<style scoped>
.optional-info-form {
  width: 25em;
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.optional-info-form div {
  width: 100%;
}

.optional-info-form .tip {
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

.optional-info-form label {
  display: inline-block;
  width: 5em;
  font-size: 12px;
  color: #333;
}

.optional-info-form input {
  width: calc(100% - 6em); /* 减去(标签宽度 + padding * 2) */
  padding: 0.5em; 
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}

/* 输入框聚焦时的样式 */
.optional-info-form input:focus {
  outline: none;
  border-color: #28a745;
  box-shadow: 0 0 4px #28a745;
}


</style>