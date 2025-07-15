import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  CalendarIcon,
  MapPinIcon,
  TagIcon,
  PlusIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ClockIcon,
  HeartIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  SparklesIcon,
  UserCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const ManageProject = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [addingMember, setAddingMember] = useState(false);
  const [addingTask, setAddingTask] = useState(false);

  const project = {
    id: 1,
    title: 'Community Garden Initiative',
    organization: 'Green Earth Foundation',
    description: 'A sustainable community garden project that provides fresh produce to local families and educational opportunities for youth.',
    location: 'Downtown Community Center',
    startDate: '2024-03-01',
    endDate: '2024-08-31',
    status: 'In Progress',
    progress: 75,
    volunteers: 12,
    skills: ['Gardening', 'Community Outreach', 'Education', 'Leadership'],
    impact: {
      familiesServed: 50,
      youthEngaged: 25,
      produceHarvested: '500 lbs',
      communityEvents: 8,
    },
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Project Lead',
      joinDate: '2024-02-15',
      skills: ['Leadership', 'Community Outreach'],
      status: 'Active',
      hours: 120,
      tasks: 8,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Garden Coordinator',
      joinDate: '2024-02-20',
      skills: ['Gardening', 'Education'],
      status: 'Active',
      hours: 95,
      tasks: 6,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Volunteer Coordinator',
      joinDate: '2024-03-01',
      skills: ['Organization', 'Communication'],
      status: 'Active',
      hours: 80,
      tasks: 5,
    },
  ];

  const tasks = [
    {
      id: 1,
      title: 'Site Preparation',
      description: 'Clear and prepare the garden site for planting',
      assignedTo: 'Michael Chen',
      dueDate: '2024-03-15',
      priority: 'High',
      status: 'In Progress',
      progress: 75,
    },
    {
      id: 2,
      title: 'Volunteer Training',
      description: 'Conduct training session for new volunteers',
      assignedTo: 'Emma Rodriguez',
      dueDate: '2024-03-20',
      priority: 'Medium',
      status: 'Upcoming',
      progress: 0,
    },
    {
      id: 3,
      title: 'Community Workshop',
      description: 'Organize educational workshop on sustainable gardening',
      assignedTo: 'Sarah Johnson',
      dueDate: '2024-03-25',
      priority: 'High',
      status: 'Upcoming',
      progress: 0,
    },
  ];

  const updates = [
    {
      id: 1,
      title: 'Site Preparation Complete',
      date: '2024-03-05',
      author: 'Sarah Johnson',
      content: 'Completed site preparation and soil testing. Ready for planting phase.',
      type: 'Progress',
    },
    {
      id: 2,
      title: 'New Volunteer Orientation',
      date: '2024-03-03',
      author: 'Emma Rodriguez',
      content: 'Oriented 5 new volunteers. They will start next week.',
      type: 'Team',
    },
    {
      id: 3,
      title: 'Equipment Donation',
      date: '2024-03-01',
      author: 'Michael Chen',
      content: 'Received gardening tools donation from local hardware store.',
      type: 'Resource',
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Project Information */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Project Information
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {project.description}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 flex items-center text-sm text-gray-900">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {project.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Timeline
                    </dt>
                    <dd className="mt-1 flex items-center text-sm text-gray-900">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {project.startDate} - {project.endDate}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Status
                    </dt>
                    <dd className="mt-1 flex items-center text-sm text-gray-900">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {project.status}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Volunteers
                    </dt>
                    <dd className="mt-1 flex items-center text-sm text-gray-900">
                      <UserGroupIcon className="h-4 w-4 mr-1" />
                      {project.volunteers}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Required Skills
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Project Progress
                </h3>
                <span className="text-sm font-medium text-gray-500">
                  {project.progress}%
                </span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${project.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                  ></div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Impact Metrics
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 p-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      Families Served
                    </h4>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">
                      {project.impact.familiesServed}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      Youth Engaged
                    </h4>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">
                      {project.impact.youthEngaged}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      Produce Harvested
                    </h4>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">
                      {project.impact.produceHarvested}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      Community Events
                    </h4>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">
                      {project.impact.communityEvents}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'team':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Team Members</h3>
              <button
                onClick={() => setAddingMember(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Member
              </button>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {teamMembers.map((member) => (
                  <li key={member.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              {member.name}
                            </h4>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <BriefcaseIcon className="h-4 w-4 mr-1" />
                              {member.role}
                            </div>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              Joined {member.joinDate}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {member.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <ClockIcon className="h-4 w-4 mr-1" />
                                {member.hours} hours
                              </div>
                              <div className="flex items-center">
                                <CheckCircleIcon className="h-4 w-4 mr-1" />
                                {member.tasks} tasks
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {member.status}
                          </span>
                          <button className="text-gray-400 hover:text-gray-500">
                            <PencilIcon className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-500">
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'tasks':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Project Tasks</h3>
              <button
                onClick={() => setAddingTask(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Task
              </button>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {tasks.map((task) => (
                  <li key={task.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              {task.title}
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {task.description}
                            </p>
                            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <UserCircleIcon className="h-4 w-4 mr-1" />
                                {task.assignedTo}
                              </div>
                              <div className="flex items-center">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                Due {task.dueDate}
                              </div>
                              <div className="flex items-center">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    task.priority === 'High'
                                      ? 'bg-red-100 text-red-800'
                                      : task.priority === 'Medium'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-green-100 text-green-800'
                                  }`}
                                >
                                  {task.priority}
                                </span>
                              </div>
                            </div>
                            <div className="mt-2">
                              <div className="relative pt-1">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                                  <div
                                    style={{ width: `${task.progress}%` }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                                  ></div>
                                </div>
                              </div>
                              <div className="mt-1 text-xs text-gray-500">
                                {task.progress}% complete
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              task.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : task.status === 'In Progress'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {task.status}
                          </span>
                          <button className="text-gray-400 hover:text-gray-500">
                            <PencilIcon className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-500">
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'updates':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Project Updates</h3>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                <PlusIcon className="h-5 w-5 mr-2" />
                New Update
              </button>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {updates.map((update) => (
                  <li key={update.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              {update.title}
                            </h4>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <UserCircleIcon className="h-4 w-4 mr-1" />
                              {update.author}
                            </div>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {update.date}
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                              {update.content}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              update.type === 'Progress'
                                ? 'bg-blue-100 text-blue-800'
                                : update.type === 'Team'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}
                          >
                            {update.type}
                          </span>
                          <button className="text-gray-400 hover:text-gray-500">
                            <PencilIcon className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-500">
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center space-x-4">
              <Link
                to="/projects"
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Projects
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                to={`/projects/${project.id}`}
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {project.title}
              </Link>
              <span className="text-gray-400">/</span>
              <h1 className="text-3xl font-bold text-gray-900">Manage Project</h1>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              Team Chat
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <BellIcon className="h-5 w-5 mr-2" />
              Notifications
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'team', 'tasks', 'updates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ManageProject; 