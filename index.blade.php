<x-blog-layout>

    <div class="mt-32 p-16 container text-justify mx-auto space-y-32">
        @foreach ($posts as $post)
            <div class="flex gap-32">
                <div class="flex-1">
                    <div class="text-lg text-gray-400 font-semibold">{{ $post->created_at->diffForhumans() }}</div>
                    <div class="font-bold text-5xl">{{ $post->title }}</div>
                    <div class="mt-4 px-3 py-0.5 rounded-md inline-flex bg-orange-100 text-orange-400 font-semibold">{{ $post->category->title }}</div> 
                    @foreach ($post->tags as $tag)
                        <div class="mt-4 px-3 py-0.5 rounded-md inline-flex bg-sky-100 text-sky-400 font-semibold">{{ $tag->name }}</div>  
                    @endforeach
                    <div class="mt-4 text-xl text-gray-500">{!! str($post->body)->words(50, '...') !!}</div> 
                    <div class=" mt-10">
                        <a href="#" class="mt-4 px-3 py-1.5 text-xl rounded-lg font-semibold bg-lime-300 text-lime-800 hover:bg-lime-400 hover:text-lime-900">Read More</a>                        
                    </div>
                </div>
                <div  class="flex-1">
                    <img src="{{ $post->image_Url }}" alt="{{ $post->title }}" class="h-96 w-full object-cover rounded-3xl">
                </div>
            </div>
        @endforeach
        {{ $posts->links() }}
    </div>

    <x-slot name="footer">
        <div class="flex px-12 text-justify gap-16">
            <div class="text-xl font-semibold">About</div>
            <div class="flex flex-col items-start gap-4">
                <h3 class="text-xl font-semibold">Categories</h3>
                @foreach ($categories as $category)
                    <a href="#">{{ $category->title }}</a>
                @endforeach
            </div>
        </div>
    </x-slot>

</x-blog-layout>