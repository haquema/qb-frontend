import axios from 'axios';
import { auth } from '@clerk/nextjs';
import prisma from '@/utils/db';

export default async function handler(req, res) {
  const { userId } = auth(); // Clerk user ID
  if (!userId) return res.status(401).json({ message: 'Unauthorized' });

  try {
    // Step 1: Retrieve credentials
    const credentials = await prisma.studentsTeachableCredentials.findUnique({
      where: { clerk_user_id: userId },
    });
    if (!credentials) return res.status(404).json({ message: 'Teachable credentials not found' });

    // Step 2: Log in to Teachable
    const response = await axios.post('https://your-teachable-school.teachable.com/admin/users/sign_in', {
      user: {
        email: credentials.teachableEmail,
        password: credentials.teachablePassword,
      },
    });

    // Step 3: Return success or handle the session token
    res.status(200).json({ message: 'Teachable authentication successful', data: response.data });
  } catch (error) {
    console.error("Error authenticating with Teachable:", error);
    res.status(500).json({ message: 'Failed to authenticate with Teachable' });
  }
}


// import { NextResponse } from 'next/server';
// import prisma from '@/utils/db';
// import axios from 'axios';

// export async function POST(req) {
//   try {
//     // Step 1: Extract Clerk user ID from request
//     const { clerkUserId } = await req.json();

//     // Step 2: Get the Teachable credentials from the database using Clerk user ID
//     const student = await prisma.student.findUnique({
//       where: { clerk_user_id: clerkUserId },
//       include: { teachableCredentials: true },
//     });

//     if (!student || !student.teachableCredentials) {
//       return NextResponse.json(
//         { error: 'Teachable credentials not found' },
//         { status: 404 }
//       );
//     }

//     const { teachable_email, teachable_password_hash } = student.teachableCredentials;

//     // Step 3: Make an API call to Teachable for session token
//     const response = await axios.post(`${process.env.TEACHABLE_URL}/admin/users/sign_in`, {
//       user: {
//         email: teachable_email,
//         password: teachable_password_hash,
//       },
//     });

//     // Step 4: Return session token in the response
//     return NextResponse.json({ sessionToken: response.data.session_token });
//   } catch (error) {
//     console.error('Teachable Login Error:', error);
//     return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
//   }
// }
