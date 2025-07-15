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
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  DocumentCheckIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  UserIcon,
  StarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const SheLeads = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const stats = [
    {
      name: 'Leadership Score',
      value: '4.8/5',
      change: '+0.3',
      changeType: 'increase',
      icon: StarIcon,
    },
    {
      name: 'Mentorship Hours',
      value: '45',
      change: '+12',
      changeType: 'increase',
      icon: UserIcon,
    },
    {
      name: 'Community Impact',
      value: '4.9/5',
      change: '+0.2',
      changeType: 'increase',
      icon: HeartIcon,
    },
    {
      name: 'Upcoming Events',
      value: '4',
      change: '+1',
      changeType: 'increase',
      icon: CalendarIcon,
    },
  ];

  const mentorshipOpportunities = [
    {
      id: 1,
      title: 'Executive Leadership Program',
      mentor: 'Sarah Johnson',
      expertise: ['Strategic Planning', 'Team Management', 'Public Speaking'],
      availability: 'Weekly',
      duration: '6 months',
      description: 'One-on-one mentorship with an experienced executive focusing on leadership development and career growth.',
      spots: 3,
      deadline: '2024-04-15',
    },
    {
      id: 2,
      title: 'Entrepreneurship Mentorship',
      mentor: 'Maria Rodriguez',
      expertise: ['Business Development', 'Innovation', 'Marketing'],
      availability: 'Bi-weekly',
      duration: '4 months',
      description: 'Learn from a successful entrepreneur about starting and scaling your own business.',
      spots: 5,
      deadline: '2024-04-30',
    },
    {
      id: 3,
      title: 'Tech Leadership Program',
      mentor: 'Lisa Chen',
      expertise: ['Technology', 'Leadership', 'Innovation'],
      availability: 'Weekly',
      duration: '3 months',
      description: 'Develop leadership skills in the technology sector with a focus on innovation and team management.',
      spots: 4,
      deadline: '2024-05-01',
    },
  ];

  const leadershipPrograms = [
    {
      id: 1,
      title: 'Women in Leadership Summit',
      organization: 'Leadership Foundation',
      date: '2024-04-15',
      duration: '2 days',
      location: 'Convention Center',
      spots: 50,
      description: 'Join other women leaders for networking, workshops, and keynote speeches.',
      topics: ['Strategic Leadership', 'Negotiation', 'Work-Life Balance'],
    },
    {
      id: 2,
      title: 'Public Speaking Workshop',
      organization: 'Communication Institute',
      date: '2024-04-20',
      duration: '1 day',
      location: 'Virtual',
      spots: 30,
      description: 'Enhance your public speaking skills and confidence in professional settings.',
      topics: ['Presentation Skills', 'Voice Modulation', 'Audience Engagement'],
    },
    {
      id: 3,
      title: 'Leadership Bootcamp',
      organization: 'Career Development Center',
      date: '2024-05-01',
      duration: '3 days',
      location: 'Training Center',
      spots: 25,
      description: 'Intensive program covering essential leadership skills and strategies.',
      topics: ['Decision Making', 'Team Building', 'Conflict Resolution'],
    },
  ];

  const communityEvents = [
    {
      id: 1,
      title: 'Women Entrepreneurs Network',
      date: '2024-03-25',
      time: '6:00 PM',
      location: 'Business Hub',
      type: 'Networking',
      description: 'Connect with other women entrepreneurs and share experiences.',
      attendees: 25,
    },
    {
      id: 2,
      title: 'Leadership Panel Discussion',
      date: '2024-03-30',
      time: '2:00 PM',
      location: 'Virtual',
      type: 'Discussion',
      description: 'Panel of successful women leaders sharing their journey and insights.',
      attendees: 40,
    },
    {
      id: 3,
      title: 'Community Impact Workshop',
      date: '2024-04-05',
      time: '10:00 AM',
      location: 'Community Center',
      type: 'Workshop',
      description: 'Learn how to create positive change in your community through leadership.',
      attendees: 30,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <stat.icon className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            {stat.name}
                          </dt>
                          <dd className="text-lg font-semibold text-gray-900">
                            {stat.value}
                          </dd>
                          <dd className="flex items-center text-sm text-gray-500">
                            {stat.changeType === 'increase' ? (
                              <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                            ) : (
                              <ArrowTrendingDownIcon className="h-4 w-4 text-red-500 mr-1" />
                            )}
                            {stat.change}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mentorship Opportunities */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Mentorship Opportunities
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {mentorshipOpportunities.map((opportunity) => (
                    <li key={opportunity.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">
                                {opportunity.title}
                              </h4>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <UserIcon className="h-4 w-4 mr-1" />
                                Mentor: {opportunity.mentor}
                              </div>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <ClockIcon className="h-4 w-4 mr-1" />
                                {opportunity.availability} • {opportunity.duration}
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  {opportunity.description}
                                </p>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {opportunity.expertise.map((skill) => (
                                  <span
                                    key={skill}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-500">
                              {opportunity.spots} spots left
                            </div>
                            <div className="text-sm text-gray-500">
                              Due {opportunity.deadline}
                            </div>
                            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Upcoming Events
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {communityEvents.map((event) => (
                    <li key={event.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">
                                {event.title}
                              </h4>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                {event.date} at {event.time}
                              </div>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <MapPinIcon className="h-4 w-4 mr-1" />
                                {event.location}
                              </div>
                              <div className="mt-1 text-sm text-gray-500">
                                {event.description}
                              </div>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <UserGroupIcon className="h-4 w-4 mr-1" />
                                {event.attendees} attendees
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                event.type === 'Networking'
                                  ? 'bg-blue-100 text-blue-800'
                                  : event.type === 'Discussion'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {event.type}
                            </span>
                            <button className="text-primary-600 hover:text-primary-900">
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'programs':
        return (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      placeholder="Search programs..."
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <FunnelIcon className="h-5 w-5 mr-2" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Programs List */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Leadership Programs
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {leadershipPrograms.map((program) => (
                    <li key={program.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">
                                {program.title}
                              </h4>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                                {program.organization}
                              </div>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                {program.date} • {program.duration}
                              </div>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <MapPinIcon className="h-4 w-4 mr-1" />
                                {program.location}
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  {program.description}
                                </p>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {program.topics.map((topic) => (
                                  <span
                                    key={topic}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-500">
                              {program.spots} spots left
                            </div>
                            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Network Size */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <UserGroupIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Network Size
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          156
                        </dd>
                        <dd className="flex items-center text-sm text-gray-500">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                          +24 from last month
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Events Attended */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CalendarIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Events Attended
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          12
                        </dd>
                        <dd className="flex items-center text-sm text-gray-500">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                          +3 from last month
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Impact */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <HeartIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Community Impact
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          4.9/5
                        </dd>
                        <dd className="flex items-center text-sm text-gray-500">
                          <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                          +0.2 from last month
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Details */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Community Engagement
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      Network Growth
                    </h4>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">
                      15%
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      Event Participation
                    </h4>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">
                      85%
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      Mentorship Rate
                    </h4>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">
                      92%
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      Community Satisfaction
                    </h4>
                    <div className="mt-2 text-3xl font-semibold text-gray-900">
                      4.8/5
                    </div>
                  </div>
                </div>
              </div>
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
            <h1 className="text-3xl font-bold text-gray-900">She Leads Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              Welcome back! Here's an overview of your leadership journey.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
              <PlusIcon className="h-5 w-5 mr-2" />
              Find Mentor
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
            {['overview', 'programs', 'community'].map((tab) => (
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

export default SheLeads; 