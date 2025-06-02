<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {Link, useForm, usePage} from '@inertiajs/vue3';

defineProps({
  mustVerifyEmail: {
    type: Boolean,
  },
  status: {
    type: String,
  },
});

const user = usePage().props.auth.user;

const form = useForm({
  name: user.name,
  family: user.family,
  email: user.email,
  mobile: user.mobile,
});

const submitForm = () => {
  form.patch(route('profile.update'), {
    preserveScroll: true,
    onSuccess: () => {
      console.log('Form submitted successfully');
    },
    onError: (errors) => {
      console.error('Form submission failed:', errors);
    },
  });
};
</script>

<template>
  <header>
    <h2 class="text-2xl font-bold text-transparent gradient-text bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text">
      اطلاعات کاربری
    </h2>

    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      اطلاعات پروفایل و آدرس ایمیل خود را به‌روزرسانی کنید.
    </p>
  </header>

  <form @submit.prevent="submitForm" class="mt-8 space-y-6">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <InputLabel for="mobile" value="موبایل" class="block text-sm font-medium text-gray-700"/>

        <TextInput
            id="mobile"
            type="text"
            class="block w-full px-4 py-2 mt-1"
            v-model="form.mobile"
            required
            autofocus
            readonly
        />

        <InputError class="mt-2 text-sm text-red-600 dark:text-red-400" :message="form.errors.mobile"/>
      </div>

      <div>
        <InputLabel for="email" value="ایمیل" class="block text-sm font-medium text-gray-700 "/>

        <TextInput
            id="email"
            type="email"
            class="block w-full px-4 py-2 mt-1"
            v-model="form.email"
            required
            autocomplete="username"
        />

        <InputError class="mt-2 text-sm text-red-600 dark:text-red-400" :message="form.errors.email"/>
      </div>

      <div>
        <InputLabel for="name" value="نام  " class="block text-sm font-medium text-gray-700"/>

        <TextInput
            id="name"
            type="name"
            class="block w-full px-4 py-2 mt-1"
            v-model="form.name"
            required
            autocomplete="username"
        />

        <InputError class="mt-2 text-sm text-red-600 dark:text-red-400" :message="form.errors.name"/>
      </div>


      <div>
        <InputLabel for="family" value="نام خانوادگی  " class="block text-sm font-medium text-gray-700 "/>

        <TextInput
            id="family"
            type="family"
            class="block w-full px-4 py-2 mt-1"
            v-model="form.family"
            required
            autocomplete="username"
        />

        <InputError class="mt-2 text-sm text-red-600 dark:text-red-400" :message="form.errors.name"/>
      </div>
    </div>

    <div v-if="mustVerifyEmail && user.email_verified_at === null">
      <p class="mt-2 text-sm text-gray-800 dark:text-gray-200">
        آدرس ایمیل شما تأیید نشده است.
        <Link
            :href="route('verification.send')"
            method="post"
            as="button"
            class="ml-1 text-sm font-medium text-blue-600 transition duration-200 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
        >
          برای ارسال مجدد ایمیل تأیید کلیک کنید.
        </Link>
      </p>

      <div
          v-show="status === 'verification-link-sent'"
          class="mt-2 text-sm font-medium text-green-600 dark:text-green-400"
      >
        لینک تأیید جدید به آدرس ایمیل شما ارسال شد.
      </div>
    </div>

    <div class="flex items-center gap-4">
      <PrimaryButton
          type="submit"
          :disabled="form.processing"
          @click="submitForm"
      >
        ذخیره
      </PrimaryButton>

      <Transition
          enter-active-class="transition duration-300 ease-in-out"
          enter-from-class="opacity-0"
          leave-active-class="transition duration-300 ease-in-out"
          leave-to-class="opacity-0"
      >
        <p
            v-if="form.recentlySuccessful"
            class="text-sm text-gray-600 dark:text-gray-400"
        >
          ذخیره شد.
        </p>
      </Transition>
    </div>
  </form>
</template>
