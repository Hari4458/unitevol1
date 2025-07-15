import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const Volunteer = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    state: 'Tamil Nadu',
    city: '',
    domains: [],
    availability: []
  });
  const navigate = useNavigate();

  const cities = [
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Tiruchirappalli',
    'Salem',
    'Tirunelveli',
    'Thoothukudi',
    'Thanjavur',
    'Tiruppur',
    'Erode',
    'Vellore',
    'Dindigul',
    'Karur',
    'Namakkal',
    'Sivakasi',
    'Ooty',
    'Hosur',
    'Nagercoil',
    'Kanchipuram',
    'Cuddalore'
  ];

  const domains = [
    'Education & Literacy',
    'Healthcare & Medical Support',
    'Environment & Sustainability',
    'Women Empowerment',
    'Child Welfare',
    'Animal Welfare',
    'Disaster Relief & Crisis Management',
    'Elderly Support',
    'Disability Support',
    'Arts & Culture Promotion',
    'Rural Development',
    'Technology & Innovation',
    'Other'
  ];

  const availabilityOptions = [
    'Weekdays (Full-Time)',
    'Weekdays (Part-Time)',
    'Weekends Only',
    'Flexible/As per Requirement',
    'One-Time Event Based'
  ];

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleCalendarClick = () => {
    navigate('/calendar');
  };

  const handleNotificationsClick = () => {
    navigate('/notifications');
  };

  const handleDomainChange = (domain) => {
    setFilters(prev => ({
      ...prev,
      domains: prev.domains.includes(domain)
        ? prev.domains.filter(d => d !== domain)
        : [...prev.domains, domain]
    }));
  };

  const handleAvailabilityChange = (option) => {
    setFilters(prev => ({
      ...prev,
      availability: prev.availability.includes(option)
        ? prev.availability.filter(a => a !== option)
        : [...prev.availability, option]
    }));
  };

  const handleCityChange = (e) => {
    setFilters(prev => ({
      ...prev,
      city: e.target.value
    }));
  };

  const stats = [
    {
      name: 'Hours Volunteered',
      value: '120',
      change: { type: 'increase', value: '12%' },
      icon: ClockIcon,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Projects Completed',
      value: '8',
      change: { type: 'increase', value: '2' },
      icon: CheckCircleIcon,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Impact Score',
      value: '4.8',
      change: { type: 'increase', value: '0.2' },
      icon: HeartIcon,
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Upcoming Events',
      value: '3',
      change: { type: 'decrease', value: '1' },
      icon: CalendarIcon,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    },
  ];

  const [availableOpportunities, setAvailableOpportunities] = useState([
    {
      id: 1,
      title: 'Community Garden Project',
      organization: 'Green Earth NGO',
      postedBy: 'NGO',
      location: 'Chennai, Tamil Nadu',
      commitment: 'Part-time',
      duration: '3 months',
      skills: ['Gardening', 'Community Outreach'],
      description: 'Help maintain and expand our community garden project.',
      impact: 'Environmental',
      spots: 5,
      deadline: '2024-04-15',
      domain: 'Environment & Sustainability',
      availability: 'Weekdays (Part-Time)'
    },
    {
      id: 2,
      title: 'Youth Mentorship Program',
      organization: 'Future Leaders Foundation',
      postedBy: 'Project Lead',
      location: 'Coimbatore, Tamil Nadu',
      commitment: 'Weekly',
      duration: '6 months',
      skills: ['Mentoring', 'Education'],
      description: 'Mentor young students in academic and personal development.',
      impact: 'Education',
      spots: 8,
      deadline: '2024-04-30',
      domain: 'Education & Literacy',
      availability: 'Weekends Only'
    },
    {
      id: 3,
      title: 'Women Entrepreneurship Workshop',
      organization: 'She Leads Initiative',
      postedBy: 'She Leads',
      location: 'Madurai, Tamil Nadu',
      commitment: 'One-time',
      duration: '1 day',
      skills: ['Training', 'Business Development'],
      description: 'Conduct workshops for aspiring women entrepreneurs.',
      impact: 'Women Empowerment',
      spots: 3,
      deadline: '2024-05-15',
      domain: 'Women Empowerment',
      availability: 'One-Time Event Based'
    }
  ]);

  const [filteredOpportunities, setFilteredOpportunities] = useState(availableOpportunities);

  const handleSearch = () => {
    let filtered = availableOpportunities;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(opp => 
        opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by city
    if (filters.city) {
      filtered = filtered.filter(opp => 
        opp.location.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    // Filter by domains
    if (filters.domains.length > 0) {
      filtered = filtered.filter(opp => 
        filters.domains.includes(opp.domain)
      );
    }

    // Filter by availability
    if (filters.availability.length > 0) {
      filtered = filtered.filter(opp => 
        filters.availability.includes(opp.availability)
      );
    }

    setFilteredOpportunities(filtered);
  };

  // Update filtered opportunities when filters change
  useEffect(() => {
    handleSearch();
  }, [searchQuery, filters]);

  const activeProjects = [
    {
      id: 1,
      title: 'Youth Mentorship Program',
      organization: 'Future Leaders Foundation',
      progress: 75,
      hours: 45,
      nextMilestone: 'Program Evaluation',
      category: 'Education',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Environmental Cleanup',
      organization: 'Green Earth NGO',
      progress: 60,
      hours: 30,
      nextMilestone: 'Community Workshop',
      category: 'Environment',
      color: 'bg-green-500'
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Volunteer Training Session',
      date: '2023-10-15',
      time: '10:00 AM',
      location: 'Community Center',
      description: 'Mandatory training for new volunteers.',
      type: 'Training',
      color: 'bg-purple-500'
    },
    {
      id: 2,
      title: 'Project Review Meeting',
      date: '2023-10-20',
      time: '2:00 PM',
      location: 'Virtual',
      description: 'Review progress and plan next steps.',
      type: 'Meeting',
      color: 'bg-blue-500'
    },
  ];

  const skills = [
    'Teaching', 'Mentoring', 'Event Planning', 'Community Outreach',
    'Fundraising', 'Administrative', 'Technical', 'Creative',
    'Leadership', 'Communication', 'Project Management', 'Research'
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10`} />
                  <div className="relative px-4 pb-12 pt-5">
                    <dt>
                      <div className={`absolute rounded-xl ${stat.color} p-3 shadow-lg`}>
                        <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
                    </dt>
                    <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                      {stat.change && (
                        <p
                          className={`ml-2 flex items-baseline text-sm font-semibold
                            ${stat.change.type === 'increase' ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {stat.change.type === 'increase' ? (
                            <ArrowTrendingUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" />
                          ) : (
                            <ArrowTrendingDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" />
                          )}
                          <span className="sr-only">
                            {stat.change.type === 'increase' ? 'Increased' : 'Decreased'} by
                          </span>
                          {stat.change.value}
                        </p>
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Active Projects</h3>
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{project.title}</h4>
                        <p className="text-sm text-gray-500">{project.organization}</p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.color} text-white`}>
                        {project.category}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-primary-600">
                              {project.progress}%
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
                          <div
                            style={{ width: `${project.progress}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${project.color}`}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Next milestone: {project.nextMilestone}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-500">{event.description}</p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${event.color} text-white`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'opportunities':
        return (
          <div className="space-y-6">
            <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col space-y-4">
                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search opportunities..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSearch}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Search
                  </button>
                </div>

                {/* Filters Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FunnelIcon className="h-5 w-5 text-primary-600 mr-2" />
                    <h4 className="text-lg font-medium text-gray-900">Filters</h4>
                  </div>

                  {/* Location Filters */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input
                        type="text"
                        value="Tamil Nadu"
                        disabled
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <select
                        value={filters.city}
                        onChange={handleCityChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white"
                      >
                        <option value="">All Cities</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Domain Filters */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Domain of Interest (Select all that apply)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {domains.map((domain) => (
                        <label key={domain} className="inline-flex items-center p-2 bg-white border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.domains.includes(domain)}
                            onChange={() => handleDomainChange(domain)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{domain}</span>
                        </label>
                      ))}
                    </div>
                    {filters.domains.includes('Other') && (
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Please specify other domain"
                          className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                      </div>
                    )}
                  </div>

                  {/* Availability Filters */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {availabilityOptions.map((option) => (
                        <label key={option} className="inline-flex items-center p-2 bg-white border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.availability.includes(option)}
                            onChange={() => handleAvailabilityChange(option)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Apply Filters Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={handleSearch}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Available Opportunities</h4>
                  {filteredOpportunities.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No opportunities found matching your criteria.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredOpportunities.map((opportunity) => (
                        <div key={opportunity.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-all duration-300">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">{opportunity.title}</h4>
                              <p className="text-sm text-gray-500">{opportunity.organization}</p>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mt-1">
                                Posted by: {opportunity.postedBy}
                              </span>
                            </div>
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                              Apply
                            </button>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {opportunity.commitment}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {opportunity.duration}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {opportunity.spots} spots left
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              Due {opportunity.deadline}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">{opportunity.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 'impact':
        return (
          <div className="space-y-6">
            <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Overall Impact</h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-4xl font-bold text-blue-600">1,200</p>
                  <p className="text-sm text-gray-600">Total Impact</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <p className="text-4xl font-bold text-green-600">120</p>
                  <p className="text-sm text-gray-600">Hours Logged</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <p className="text-4xl font-bold text-purple-600">8</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Impact Breakdown</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Community Impact</span>
                    <span className="text-sm font-medium text-gray-700">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Project Quality</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Team Collaboration</span>
                    <span className="text-sm font-medium text-gray-700">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Personal Growth</span>
                    <span className="text-sm font-medium text-gray-700">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full" style={{ width: '88%' }}></div>
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Volunteer Dashboard</h1>
          <p className="text-gray-600">Track your volunteering journey and impact</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/volunteer/search')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
              Search Opportunities
            </button>
            <button
              onClick={handleProfileClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <UserIcon className="h-5 w-5 mr-2" />
              Profile
            </button>
            <button
              onClick={handleCalendarClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Calendar
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('registered')}
              className={`${
                activeTab === 'registered'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Registered Events
            </button>
          </nav>
        </div>

        {/* Content Section */}
        {activeTab === 'overview' && renderContent()}
      </div>
    </div>
  );
};

export default Volunteer; 