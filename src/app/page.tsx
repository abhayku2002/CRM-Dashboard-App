'use client';

import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Calendar} from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Separator} from '@/components/ui/separator';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Sector,
} from 'recharts';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Users, ListChecks, Activity, Settings} from 'lucide-react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Customer} from '@/services/crm';
import {getCustomers} from '@/services/crm';
import {cn} from '@/lib/utils';

// Dummy data for New Customers Bar Chart
const newCustomersData = [
  {day: 'Mon', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50)},
  {day: 'Tue', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50)},
  {day: 'Wed', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50)},
  {day: 'Thu', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50)},
  {day: 'Fri', currentWeek: Math.floor(Math.random() * 50), previousWeek: Math.floor(Math.random() * 50)},
];

// Dummy data for Successful Deals Donut Chart
const successfulDealsData = [
  {name: 'Successful', value: Math.floor(Math.random() * 100)},
  {name: 'Remaining', value: 100 - Math.floor(Math.random() * 100)},
];

const COLORS = ['hsl(var(--chart-1))', '#00C49F']; // Using CSS variables

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}: any) => {
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
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pipelineStages, setPipelineStages] = useState([
    'Contacted',
    'Negotiation',
    'Offer Sent',
    'Deal Closed',
  ]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const customerData = await getCustomers();
      setCustomers(customerData);
    };

    fetchCustomers();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer =>
    customer.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group customers by pipeline stage
  const groupedCustomers = pipelineStages.reduce((acc: any, stage) => {
    acc[stage] = filteredCustomers.filter(customer => customer.pipelineStage === stage);
    return acc;
  }, {});

  return (
    <motion.div
      className="container mx-auto p-6 flex flex-col gap-4"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      {/* Header Section */}
      <motion.header
        className="mb-4 flex items-center justify-between"
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.2}}
      >
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <Input type="search" placeholder="Search customer..." className="md:w-64" onChange={handleSearch} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort by <span className="ml-2"> </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Name</DropdownMenuItem>
              <DropdownMenuItem>Date</DropdownMenuItem>
              <DropdownMenuItem>Priority</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button>
            <Activity className="mr-2 h-4 w-4" />
            Me
          </Button>
          <Button>
            <ListChecks className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="primary">+ Add Customer</Button>
        </div>
      </motion.header>

      {/* Overview Stats Cards */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5, delay: 0.4}}
      >
        <Card className="bg-highlight shadow-md">
          <CardHeader>
            <CardTitle>Total Customers</CardTitle>
            <CardDescription>As of today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">120</div>
          </CardContent>
        </Card>

        <Card className="bg-highlight shadow-md">
          <CardHeader>
            <CardTitle>Tasks In Progress</CardTitle>
            <CardDescription>Current workload</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">53</div>
          </CardContent>
        </Card>

        <Card className="bg-highlight shadow-md">
          <CardHeader>
            <CardTitle>Successful Deals</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-3xl font-bold mr-2">68%</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-highlight shadow-md">
          <CardHeader>
            <CardTitle>Total Prepayment</CardTitle>
            <CardDescription>From customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$15.890</div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Main Content Area */}
      <motion.main
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.6}}
      >
        {/* Calendar Widget */}
        <div className="lg:col-span-1">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Calendar />
            </CardContent>
          </Card>
        </div>

        {/* Customer Pipeline Stages */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Customer Pipeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineStages.map(stage => (
              <div key={stage} className="bg-highlight rounded-md p-4 shadow-md">
                <h3 className="font-semibold mb-2">{stage}</h3>
                {groupedCustomers[stage] && groupedCustomers[stage].length > 0 ? (
                  <ul>
                    {groupedCustomers[stage].map(customer => (
                      <li key={customer.id} className="mb-2 p-2 rounded-md border border-gray-200">
                        <h4 className="text-sm font-semibold">{customer.companyName}</h4>
                        <p className="text-xs">{customer.description}</p>
                        <p className="text-xs">Due Date: {customer.dueDate}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">No customers in this stage.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.main>

      {/* Footer Section - Sales Performance Charts (Example) */}
      <motion.footer
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.8}}
      >
        {/* Sales Performance Charts */}
        <Card className="shadow-md">
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
