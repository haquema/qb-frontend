import CourseCard from "./courses/CourseCard";
import courseList from "./courses/courseList";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4">
      <h1 className="font-geistSans text-3xl ">Welcome to Quranbound</h1>
      <p> Click on a course to enrol and start your journey!</p>
      <div className="flex flex-col w-full items-center py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courseList.map((item, index) => (
            <div key={index} className='mx-2'>
              <CourseCard key={index} courseItem={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
