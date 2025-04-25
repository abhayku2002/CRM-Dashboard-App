"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';

// Dummy data for New Customers Bar Chart
const newCustomersData = [
  { day: 'Mon', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50) },
  { day: 'Tue', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50) },
  { day: 'Wed', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50) },
  { day: 'Thu', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50) },
  { day: 'Fri', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50) },
];

// Dummy data for Successful Deals Donut Chart
const successfulDealsData = [
  { name: 'Successful', value: Math.floor(Math.random() * 100) },
  { name: 'Remaining', value: 100 - Math.floor(Math.random() * 100) },
];

const COLORS = ['hsl(var(--chart-1))', '#00C49F']; // Using CSS variables

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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

        {/* Sales Performance Charts */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            {/* New Customers Chart */}
            <div>
              <h3 className="text-sm font-semibold mb-2">New Customers</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={newCustomersData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="currentWeek" fill="hsl(var(--chart-2))" name="Current Week" />
                  <Bar dataKey="previousWeek" fill="hsl(var(--chart-3))" name="Previous Week" strokeDasharray="5 5" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Successful Deals Chart */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Successful Deals</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={successfulDealsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {successfulDealsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.footer>
    </motion.div>
  );
};

export default Home;
