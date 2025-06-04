public function index(): InertiaResponse
{
    $userId = Auth::id();

    // Courses user has registered in
    $registeredCourses = $this->registerRepository
        ->getCoursesByUserId($userId)
        ->pluck('course')
        ->sortByDesc('updated_at')
        ->take(3)
        ->values();

    // Courses the user hasn't registered in
    $registeredIds = $registeredCourses->pluck('id')->toArray();

    $unregisteredCourses = \App\Models\Course::whereNull('parent_id')
        ->whereNotIn('id', $registeredIds)
        ->orderByDesc('updated_at')
        ->take(3)
        ->get();

    return Inertia::render('UserPanel/Dashboard', [
        'registered' => $registeredCourses->map(fn($course) => $this->formatCourse($course)),
        'unregistered' => $unregisteredCourses->map(fn($course) => $this->formatCourse($course)),
    ]);
}

private function formatCourse($course): array
{
    return [
        'id' => $course->id,
        'title' => $course->title,
        'total_hours' => $course->total_hours,
        'session_count' => $course->session_count,
        'teacher_count' => $course->teacher_count,
        'workshop_count' => $course->workshop_count,
        'detailLink' => route('bootCampDetail', ['id' => $course->id]),
    ];
}
