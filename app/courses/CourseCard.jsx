'use client'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function CourseCard({ index, courseItem }) {
  const router = useRouter()

  return (
    <Card
      shadow="sm"
      key={index}
      isPressable
      onPress={() => router.push(`/courses/${courseItem.courseUrl}`)}
      className="w-80 aspect-square"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="none"
          width="100%"
          alt={courseItem.title}
          className="w-full object-cover h-full"
          style={{ objectPosition: 'top' }}
          src={courseItem.img}
        />
      </CardBody>
    </Card>
  )
}