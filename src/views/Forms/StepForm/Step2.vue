<template>
  <div>
    <a-form layout="horizontal" :form="form">
      <a-form-item
        label="付款帳戶"
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
        >{{ step.payAccount }}</a-form-item
      >
      <a-form-item
        label="付款密碼"
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'password',
            {
              initialValue: step.payAccount,
              rules: [{ require: true, message: '請輸入密碼' }]
            }
          ]"
          type="password"
          placeholder="請輸入付款密碼"
        />
      </a-form-item>
      <a-form-item>
        <a-button @click="onPrev">上一步</a-button>
        <a-button style="margin-left:8px " type="primary" @click="handleSubmit"
          >提交</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    //要create一個form實例
    this.form = this.$form.createForm(this);
    //寫佈局
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      }
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handleSubmit() {
      const { form, $store, step } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.dispatch({
            type: "form/submitStepForm",
            payload: { ...step, ...values }
          });
        }
      });
    },
    onPrev() {
      this.$router.push("/form/step-form/info");
    }
  }
};
</script>

<style></style>
