'use client'
import courseList from "./courseList";
import CourseCard from "./CourseCard";

export default function Page() {

  return (
    <div className="flex flex-col w-full items-center py-24">
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
