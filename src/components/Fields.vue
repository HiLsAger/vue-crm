<template>
  <div class="form-fields">
    <div class="form-field" v-for="(item, index) in labels" :key="index">
      <label :for="item.title">{{ item.title }}</label>
      <input
        v-model="formData[index]"
        :id="item.title"
        :required="item.required"
        :placeholder="item.placeholder"
        :type="item.type"
        @input="onFieldInput(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { labelPropertyes } from "@/utility/interfaces/LabelPropertyes";

@Options({
  props: {
    labels: {
      type: Array as () => labelPropertyes[],
      required: true,
    },
  },
})
export default class FieldsComponent extends Vue {
  labels!: labelPropertyes[];
  formData: Record<string, string> = {};

  onFieldInput(index: number) {
    this.$emit("input", { [index]: this.formData[index] });
  }
}
</script>

<style lang="scss">
.form-field {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block: 1rem;

  label {
    font-size: 1.2rem;
    text-align: left;
  }
  input {
    width: 100%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    padding: 0.6rem 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
