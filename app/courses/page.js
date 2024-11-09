'use client'
import courseList from "./courseList";
import CourseCard from "./CourseCard";

export default function Page() {

  return (
    <div className="flex flex-col w-full items-center pb-24">
      <h1 className="self-center font-semibold text-2xl my-4">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {courseList.map((item, index) => (
          <div key={index} className='mx-2'>
            <CourseCard key={index} courseItem={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
