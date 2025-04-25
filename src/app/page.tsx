
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <motion.div
      className="container mx-auto p-6 flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <motion.header className="mb-4" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
      </motion.header>

      {/* Overview Stats Cards */}
      <motion.section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle>Total Customers</CardTitle>
            <CardDescription>As of today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">120</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasks In Progress</CardTitle>
            <CardDescription>Current workload</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">35</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Successful Deals</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">80%</div>
          </CardContent>
        </Card>

         <Card>
          <CardHeader>
            <CardTitle>Total Prepayment</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$12,000</div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Main Content Area */}
      <motion.main className="grid grid-cols-1 lg:grid-cols-3 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
        {/* Calendar Widget */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Calendar />
            </CardContent>
          </Card>
        </div>

        {/* Task List with Progress */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Task List</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>Task 1 - 50%</li>
                <li>Task 2 - 75%</li>
                <li>Task 3 - 25%</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Feed */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                  <div className="mb-2 flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/50/50" alt="User Avatar" />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">New customer added</p>
                      <p className="text-sm text-muted-foreground">Added Acme Corp.</p>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="mb-2 flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/51/51" alt="User Avatar" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Deal closed</p>
                      <p className="text-sm text-muted-foreground">Closed deal with Beta Inc.</p>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="mb-2 flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/52/52" alt="User Avatar" />
                      <AvatarFallback>EB</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Meeting scheduled</p>
                      <p className="text-sm text-muted-foreground">Scheduled meeting with Charlie Co.</p>
                    </div>
                  </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </motion.main>

      {/* Footer Section - Upcoming Meetings and Sales Performance Charts (Example) */}
      <motion.footer className="grid grid-cols-1 lg:grid-cols-2 gap-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Meeting 1 - Tomorrow</li>
              <li>Meeting 2 - Next Week</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Performance Charts</CardTitle>
          </CardHeader>
          <CardContent>
            <div>Bar Chart Here</div>
          </CardContent>
        </Card>
      </motion.footer>
    </motion.div>
  );
};

export default Home;
