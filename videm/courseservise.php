<?php

namespace Videm\Services;

use App\Http\Resources\CourseResource;
use Videm\Interfaces\RepositoryInterfaces\CourseRepositoryInterface;
use Videm\Interfaces\ServiceInterfaces\CourseServiceInterface;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Videm\Repositories\CourseRepository;

class CourseService implements CourseServiceInterface
{
    protected CourseRepository $courseRepository;

    public function __construct(CourseRepositoryInterface $courseRepository)
    {
        $this->courseRepository = $courseRepository;
    }

    public function getAllCourses(): ResourceCollection
    {
        return $this->courseRepository->allCourses();
    }

    public function getCourseById($id)
    {
        $course = $this->courseRepository->findCourse($id);
        // $course->load('contents');
        $this->courseRepository->getCourseMapsAndContents($course);
        return new CourseResource($course);
    }

    public function getCourseMapsAndContents($courseId)
    {
        return $this->courseRepository->getCourseMapsAndContents($courseId);
    }
}