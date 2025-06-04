<?php

namespace App\Services\WebService\UserPanel\Dashboard;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use App\Repositories\RegisterRepository;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;

class DashboardWebService implements DashboardWebServiceInterface
{
    /**
     * DashboardWebService constructor.
     *
     * @param RegisterRepository $registerRepository
     */
    public function __construct(private readonly RegisterRepository $registerRepository)
    {
    }

    /**
     * Display the dashboard with user's registered courses and available courses.
     *
     * @return InertiaResponse
     */
    public function index(): InertiaResponse
    {
        $userId = Auth::id();
        
        // Get user's registered courses
        $registeredCourses = $this->registerRepository->getCoursesByUserId($userId)
            ->pluck('course')
            ->sortByDesc('updated_at')
            ->take(3);

        // Get available courses (not registered by user)
        $registeredCourseIds = $registeredCourses->pluck('id')->toArray();
        $availableCourses = Course::whereNull('parent_id')
            ->whereNotIn('id', $registeredCourseIds)
            ->orderByDesc('updated_at')
            ->take(3)
            ->get();

        return Inertia::render('UserPanel/Dashboard', [
            'registeredCourses' => $registeredCourses->map(function ($course) {
                return [
                    'id' => $course->id,
                    'title' => $course->title,
                    'total_hours' => $course->total_hours,
                    'session_count' => $course->session_count,
                    'teacher_count' => $course->teacher_count,
                    'workshop_count' => $course->workshop_count,
                    'detailLink' => route('bootCampDetail', ['id' => $course->id])
                ];
            }),
            'availableCourses' => $availableCourses->map(function ($course) {
                return [
                    'id' => $course->id,
                    'title' => $course->title,
                    'total_hours' => $course->total_hours,
                    'session_count' => $course->session_count,
                    'teacher_count' => $course->teacher_count,
                    'workshop_count' => $course->workshop_count,
                    'detailLink' => route('bootCampDetail', ['id' => $course->id])
                ];
            })
        ]);
    }
} 