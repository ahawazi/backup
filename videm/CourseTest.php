<?php

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Cache;
use Modules\Course\App\Models\Course;
use Modules\Customer\App\Models\Customer;
use Modules\User\App\Models\User;

uses(Tests\TestCase::class);


it("get all ", function () {
    Course::factory()->count(3)->create([
        'user_id' => auth()->id()
    ]);

    $response = $this->get('/courses');

    $response->assertStatus(200);
});


test("title is required to create a course", function () {
    $course = Course::factory()->make();
    $file = UploadedFile::fake()->image('image.jpg');
    $path = $file->storeAs(
        "{$file->getMimeType()}",
        $file->hashName(),
        'temp'
    );
    $response = $this->postJson('/courses', [
        'title' => '', // Empty title
        'description' => "dddd",
        'image' => $path,
    ]);

    $response->assertStatus(422); // Expecting a validation error
   $response->assertJsonValidationErrors([
       'title'
    ]);  //Expecting a validation error for the title field
});

test("description is nullable to create a course", function () {
    $file = UploadedFile::fake()->image('image.jpg');
    $path = $file->storeAs(
        "{$file->getMimeType()}",
        $file->hashName(),
        'temp'
    );
    $response = $this->postJson('/courses', [
        'title' => 'Course Title',
        'description' => '', // Empty description
        'image' => $path,
    ]);

    $response->assertStatus(201); // Expecting a successful creation
});

test("image field most be a image file", function () {
    $course = Course::factory()->make();

    $response = $this->postJson('/api/courses', [
        'title' => $course->title,
        'description' => $course->description,
        'image' => 'not-an-image-file', // Not an image file
    ]);

    $response->assertStatus(422); // Expecting a validation error
    $response->assertJsonValidationErrors([
        'image'
    ]); // Expecting a validation error for the image field
});

test("user can create a course with an image", function () {
    $course = Course::factory()->make();
    $file = UploadedFile::fake()->image('image.jpg');
    $path = $file->storeAs(
        "{$file->getMimeType()}",
        $file->hashName(),
        'temp'
    );
    $response = $this->postJson('/api/courses', [
        'title' => $course->title,
        'description' => $course->description,
        'image' => $path,
    ]);

    $response->isOk(); // Expecting a successful creation
    $this->assertDatabaseHas('courses', [
        'title' => $course->title,
        'description' => $course->description,
    ]);
//    $this->assertDatabaseHas('media', [
//        'model_type' => (new Course)->getMorphClass(),
//        'model_id' => $response->json('data.id'),
//        'collection_name' => 'image',
//    ]);
});

test("user can create a course", function () {
    $course = Course::factory()->make();

    $file = UploadedFile::fake()->image('image.jpg');
    $path = $file->storeAs(
        "{$file->getMimeType()}",
        $file->hashName(),
        'temp'
    );
    $response = $this->postJson('/api/courses', [
        'title' => $course->title,
        'description' => $course->description,
        'image' => $path,
    ]);

    $response->assertStatus(201); // Expecting a successful creation
    $this->assertDatabaseHas('courses', [
        'title' => $course->title,
        'description' => $course->description,
    ]);
});

test("title is required to update a course", function () {
    $course = Course::factory()
        ->create([
            'user_id' => auth()->id(),
        ]);

    $response = $this->putJson("/api/courses/{$course->id}", [
        'title' => '', // Empty title
        'description' => 'New Description',
    ]);

    $response->assertStatus(422); // Expecting a validation error
    $response->assertJsonValidationErrors('title'); // Expecting a validation error for the title field
});


test("description is nullable to update a course", function () {
    $course = Course::factory()
        ->create([
            'user_id' => auth()->id(),
        ]);

    $response = $this->putJson("/api/courses/{$course->id}", [
        'title' => 'New Title',
        'description' => '', // Empty description
    ]);

    $response->assertStatus(200); // Expecting a successful update
});

test("image field most be a image file to update a course", function () {
    $course = Course::factory()
        ->create([
            'user_id' => auth()->id(),
        ]);

    $response = $this->putJson("/api/courses/{$course->id}", [
        'title' => 'New Title',
        'description' => 'New Description',
        'image' => 'not-an-image-file', // Not an image file
    ]);

    $response->assertStatus(422); // Expecting a validation error
    $response->assertJsonValidationErrors([
        'image'
    ]); // Expecting a validation error for the image field
});

test("user can update a course with an image", function () {
    $course = Course::factory()->create([
        'user_id' => auth()->id(),
    ]);
    $file = UploadedFile::fake()->image('image.jpg');
    $path = $file->storeAs(
        "{$file->getMimeType()}",
        $file->hashName(),
        'temp'
    );
    $response = $this->putJson("/api/courses/{$course->id}", [
        'title' => 'New Title',
        'description' => 'New Description',
        'image' => $path,
    ]);

    $response->isOk(); // Expecting a successful update
    $this->assertDatabaseHas('courses', [
        'id' => $course->id,
        'title' => 'New Title',
        'description' => 'New Description',
    ]);
    $this->assertDatabaseHas('media', [
        'model_type' => (new Course)->getMorphClass(),
        'model_id' => $course->id,
        'collection_name' => 'image',
    ]);
});

test("the last image is deleted when a new image is uploaded", function () {
    $course = Course::factory()->create([
        'user_id' => auth()->id(),
    ]);
    $course->addMedia(UploadedFile::fake()->image('old-image.jpg'))->toMediaCollection('image');
    $cousreImageId = $course->image->first()?->id;
    $file = UploadedFile::fake()->image('image.jpg');
    $path = $file->storeAs(
        "{$file->getMimeType()}",
        $file->hashName(),
        'temp'
    );
    $response = $this->putJson("/api/courses/{$course->id}", [
        'title' => 'New Title',
        'description' => 'New Description',
        'image' => $path,
    ]);

    $response->isOk(); // Expecting a successful update
    $this->assertDatabaseHas('courses', [
        'id' => $course->id,
        'title' => 'New Title',
        'description' => 'New Description',
    ]);
   $this->assertDatabaseHas('media', [
       'model_type' => (new Course)->getMorphClass(),
       'model_id' => $course->id,
       'collection_name' => 'image',
   ]);
   $this->assertDatabaseMissing('media', [
       'model_type' => (new Course)->getMorphClass(),
       'model_id' => $course->id,
       'collection_name' => 'image',
       'id' => $cousreImageId,
   ]);
});


test("user can update a course", function () {
    $course = Course::factory()->create([
        'user_id' => auth()->id(),
    ]);
    $newCourse = Course::factory()->make();

    $response = $this->putJson("/api/courses/{$course->id}", [
        'title' => $newCourse->title,
        'description' => $newCourse->description,
    ]);

    $response->assertStatus(200); // Expecting a successful update
    $this->assertDatabaseHas('courses', [
        'id' => $course->id,
        'title' => $newCourse->title,
        'description' => $newCourse->description,
    ]);
});

test("user can delete a course", function () {
    $course = Course::factory()->create(['user_id' => auth()->id()]);

    $response = $this->delete("/api/courses/{$course->id}");

    $response->assertStatus(204); // Expecting a successful deletion
    $this->assertDatabaseHas('courses', [
        'id' => $course->id,
        'deleted_at' => now()->toDateTimeString(),
    ]);
});


//assign users to course

test("user can assign customers to a course", function () {
    $course = Course::factory()->create(['user_id' => auth()->id()]);
    $customers = Customer::factory()->count(100)->create();


    $response = $this->postJson("/api/courses/{$course->id}/customers", [
        'customers' => $customers->toArray(),
        'expire_date' => now()->addYear()->format('Y-m-d'),
    ]);

    $response->assertStatus(200); // Expecting a successful assignment
    $this->assertDatabaseHas('course_customer', [
        'course_id' => $course->id,
        'customer_id' => $customers->first()->id,
        'expire_date' => now()->addYear()->format('Y-m-d'),
    ]);
});

test('user can assign customers to a course with default expiry date', function () {
    $course = Course::factory()->create(['user_id' => auth()->id()]);
    $customers = Customer::factory()->count(100)->create();

    $response = $this->postJson("/api/courses/{$course->id}/customers", [
        'customers' => $customers->toArray(),
    ]);

    $response->assertStatus(200); // Expecting a successful assignment
    $this->assertDatabaseHas('course_customer', [
        'course_id' => $course->id,
        'customer_id' => $customers->first()->id,
        'expire_date' => null,
    ]);
});

test('user can assign mobile numbers to a course', function () {
    $course = Course::factory()->create(['user_id' => auth()->id()]);
    $customers = Customer::factory()->count(100)->make();

    $response = $this->postJson("/api/courses/{$course->id}/customers", [
        'customers' => $customers->toArray(),
    ]);


    $response->assertStatus(200); // Expecting a successful assignment
    $this->assertDatabaseHas('customers', [
        'mobile' => $customers->first()->mobile,
        'name' => $customers->first()->name,
    ]);
    $this->assertDatabaseHas('customers', [
        'mobile' => $customers->last()->mobile,
        'name' => $customers->last()->name,
    ]);
    $this->assertDatabaseHas('course_customer', [
        'course_id' => $course->id,
        'customer_id' => Customer::where('mobile', mobileNormalize($customers->first()->mobile))->first()->id,
        'expire_date' => null,
    ]);
    $this->assertDatabaseHas('course_customer', [
        'course_id' => $course->id,
        'customer_id' => Customer::where('mobile', mobileNormalize($customers->last()->mobile))->first()->id,
        'expire_date' => null,
    ]);
});

test("user can expire course assignments", function () {
    $course = Course::factory()->create([
        'user_id' => auth()->id(),
    ]);
    $customers = Customer::factory()->count(100)->create();
    $course->customers()->attach($customers->pluck('id')->toArray(), ['expire_date' => now()->addDays(10)]);

    $response = $this->postJson("/api/courses/{$course->id}/assign-customers", [
        'customers' => $customers->toArray(),
        'expire_date' => now()->format('Y-m-d'),
    ]);

    $response->assertStatus(200); // Expecting a successful expiration
    $this->assertDatabaseHas('course_customer', [
        'course_id' => $course->id,
        'customer_id' => $customers->first()->id,
        'expire_date' => now()->format('Y-m-d'),
    ]);
});


//get course customers
test("user can get course customers", function () {
    $course = Course::factory()->create(['user_id' => auth()->id()]);
    $customers = Customer::factory()->count(100)->create();
    $course->customers()->attach(
        $customers->pluck('id')->toArray(),
        ['expire_date' => now()->addDays(10)->format('Y-m-d')]
    );

    $response = $this->get("/api/courses/{$course->id}/customers");

    $response->assertStatus(200); // Expecting a successful response
    $response->assertJsonCount(15, 'data');
    $response->assertJsonFragment([
        'name' => $customers->first()->name,
        'mobile' => $customers->first()->mobile,
        'expire_date' => now()->addDays(10)->format('Y-m-d'),
    ]);
});
