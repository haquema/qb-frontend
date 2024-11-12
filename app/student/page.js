'use client'
import { useEffect } from 'react';
import { Link } from '@nextui-org/react';
import axios from 'axios';

export default function StudentDashboard() {
  useEffect(() => {
    const authenticateTeachable = async () => {
      try {
        await axios.post('/api/auth/teachable');
        console.log("Authenticated with Teachable successfully");
      } catch (error) {
        console.error("Teachable authentication failed:", error);
      }
    };
    authenticateTeachable();
  }, []);

  return (
    <div className="flex w-full justify-center items-center h-80">
      <p className="font-geistSans">Welcome to the student dashboard</p>
      <p>To go to your course click <Link href='/student/class' color='foreground'>here</Link></p>
    </div>
  );
}