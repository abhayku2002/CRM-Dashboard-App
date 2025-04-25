'use client';

import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation';

const DashboardPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated (e.g., token exists)
    const userId = localStorage.getItem('userId');

    if (!userId) {
      // Redirect to the login page if not authenticated
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Dashboard content here */}
    </div>
  );
};

export default DashboardPage;
