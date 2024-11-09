export default async function Page({ params }) {
  const courseId = (await params).courseId
  
  return <div>My Post: {courseId}</div>
}
