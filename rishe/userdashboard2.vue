<script setup>
import AuthenticatedLayout from '@/Layouts/UserPanel/UserPanelLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import BootcampCard from '@/Pages/UserPanel/UserCourse/Partials/UserCourseCard.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';

defineProps({
    registered: Array,
    unregistered: Array,
});

function extractNumber(value) {
    return Number(value) || 0;
}
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="p-4 space-y-12">

            <!-- Unregistered Courses -->
            <div>
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xl font-semibold">دوره‌های پیشنهادی برای شما</h2>
                    <Link :href="route('index') + '#bootcamp'">
                        <PrimaryButton>دیدن تمام دوره‌ها</PrimaryButton>
                    </Link>
                </div>
                <div v-if="unregistered.length" class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <BootcampCard
                        v-for="course in unregistered"
                        :key="course.id"
                        :id="course.id"
                        :title="course.title"
                        :detailLink="course.detailLink"
                        :hours="extractNumber(course.total_hours)"
                        :teachers="extractNumber(course.teacher_count)"
                        :projects="extractNumber(course.session_count)"
                        :workshops="extractNumber(course.workshop_count)"
                    />
                </div>
            </div>

            <!-- Registered Courses -->
            <div>
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xl font-semibold">دوره‌های من</h2>
                    <Link :href="route('user.mycourse')">
                        <PrimaryButton>مشاهده همه دوره‌های من</PrimaryButton>
                    </Link>
                </div>
                <div v-if="registered.length" class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <BootcampCard
                        v-for="course in registered"
                        :key="course.id"
                        :id="course.id"
                        :title="course.title"
                        :detailLink="course.detailLink"
                        :hours="extractNumber(course.total_hours)"
                        :teachers="extractNumber(course.teacher_count)"
                        :projects="extractNumber(course.session_count)"
                        :workshops="extractNumber(course.workshop_count)"
                    />
                </div>
                <div v-else class="text-center text-gray-600">شما هنوز در دوره‌ای ثبت‌نام نکرده‌اید</div>
            </div>

        </div>
    </AuthenticatedLayout>
</template>
