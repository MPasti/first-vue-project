<script setup>
defineProps({
  onKey: {
    type: Function,
    required: false,
  },
  updateText: {
    type: Function,
    required: false,
  },
  valueData: {
    type: String,
    required: false,
  },
  placeholderText: {
    type: String,
    required: false,
  },
  labelText: {
    type: String,
    required: false,
  },
  addClass: {
    type: String,
    required: false,
  },
  idField: {
    type: String,
    required: false,
  },
  disabledField: {
    type: Boolean,
    default: false,
  },
  requiredField: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <label>{{labelText}}</label>
  <input
    type="text"
    :id="idField"
    :class="addClass"
    :disabled="disabledField"
    :required="requiredField"
    :value="valueData"
    :placeholder="placeholderText"
    @keydown="onKey"
    @keyup="({ target: { value } }) => updateText(idField, value)"
  />
</template>
