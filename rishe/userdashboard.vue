<script setup>
import AuthenticatedLayout from '@/Layouts/UserPanel/UserPanelLayout.vue';
import {Head, Link} from '@inertiajs/vue3';
import BootcampCard from '@/Pages/UserPanel/UserCourse/Partials/UserCourseCard.vue';
import PrimaryButton from '@/Components/Buttons/PrimaryButton.vue';

defineProps({
    registeredCourses: {
        type: Array,
        default: () => [],
    },
    availableCourses: {
        type: Array,
        default: () => [],
    },
});

function extractNumber(value) {
    return Number(value) || 0;
}
</script>

<template>
    <Head title="Dashboard"/>

    <AuthenticatedLayout>
        <div class="p-4 space-y-8">
            <!-- Available Courses Section -->
            <section>
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">دوره‌های موجود</h2>
                    <Link :href="route('index') + '#bootcamp'" class="font-medium text-primary-600 hover:text-primary-500">
                      <PrimaryButton>  مشاهده تمام دوره‌ها </PrimaryButton>
                    </Link>
                </div>
                <div v-if="availableCourses.length" class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <BootcampCard
                        v-for="(course, index) in availableCourses"
                        :key="'available-' + index"
                        :id="course.id"
                        :title="course.title"
                        :detailLink="course.detailLink"
                        :hours="extractNumber(course.total_hours)"
                        :teachers="extractNumber(course.teacher_count)"
                        :projects="extractNumber(course.session_count)"
                        :workshops="extractNumber(course.workshop_count)"
                    />
                </div>
                <div v-else class="flex flex-col items-center justify-center py-12 text-center rounded-lg bg-gray-50">
                    <p class="mb-4 text-lg text-gray-600">در حال حاضر دوره جدیدی موجود نیست</p>
                </div>
            </section>

            <!-- Registered Courses Section -->
            <section>
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">دوره‌های من</h2>
                    <Link :href="route('myCourse')" class="font-medium text-primary-600 hover:text-primary-500">
                      <PrimaryButton>  مشاهده همه دوره‌های من </PrimaryButton>
                    </Link>
                </div>
                <div v-if="registeredCourses.length" class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <BootcampCard
                        v-for="(course, index) in registeredCourses"
                        :key="'registered-' + index"
                        :id="course.id"
                        :title="course.title"
                        :detailLink="course.detailLink"
                        :hours="extractNumber(course.total_hours)"
                        :teachers="extractNumber(course.teacher_count)"
                        :projects="extractNumber(course.session_count)"
                        :workshops="extractNumber(course.workshop_count)"
                    />
                </div>
                <div v-else class="flex flex-col items-center justify-center py-12 text-center rounded-lg bg-gray-50">
                    <p class="mb-4 text-lg text-gray-600">شما هنوز در دوره‌ای ثبت‌نام نکرده‌اید</p>
                    <Link :href="route('index') + '#bootcamp'" class="font-medium">
                        <PrimaryButton>مشاهده دوره‌ها</PrimaryButton>
                    </Link>
                </div>
            </section>
        </div>
    </AuthenticatedLayout>
</template>
