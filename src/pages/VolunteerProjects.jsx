import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  TagIcon,
  FunnelIcon,
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon,
  XCircleIcon,
  StarIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const VolunteerProjects = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    domain: '',
    date: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState({});
  const [participationStatus, setParticipationStatus] = useState({});

  // Sample projects data
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Community Cleanup Drive',
      organization: 'Green Earth Foundation',
      location: 'Chennai',
      domain: 'Environment',
      date: '2024-03-15',
      duration: '2 days',
      volunteersNeeded: 20,
      description: 'Join us in cleaning up the local beach and raising awareness about marine pollution.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      postedBy: {
        name: 'Green Earth Foundation',
        type: 'NGO'
      }
    },
    {
      id: 2,
      title: 'Women\'s Empowerment Workshop',
      organization: 'She Leads',
      location: 'Bangalore',
      domain: 'Women Empowerment',
      date: '2024-03-20',
      duration: '1 day',
      volunteersNeeded: 15,
      description: 'Help organize and facilitate workshops for women entrepreneurs.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
      postedBy: {
        name: 'She Leads',
        type: 'Organization'
      }
    },
    {
      id: 3,
      title: 'Education for All',
      organization: 'Teach for India',
      location: 'Mumbai',
      domain: 'Education',
      date: '2024-03-25',
      duration: '3 days',
      volunteersNeeded: 30,
      description: 'Volunteer to teach underprivileged children and help them with their studies.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1722&q=80',
      postedBy: {
        name: 'Teach for India',
        type: 'NGO'
      }
    }
  ]);

  // Simulate real-time participation updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Check for any new participation updates
      const updatedProjects = projects.map(project => {
        if (applicationStatus[project.id] === 'accepted' && !participationStatus[project.id]) {
          // Simulate participation after 5 seconds of acceptance
          setTimeout(() => {
            setParticipationStatus(prev => ({
              ...prev,
              [project.id]: {
                status: 'participated',
                hours: Math.floor(Math.random() * 8) + 1,
                date: new Date().toISOString()
              }
            }));
          }, 5000);
        }
        return project;
      });
      setProjects(updatedProjects);
    }, 1000);

    return () => clearInterval(interval);
  }, [applicationStatus, participationStatus]);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      const results = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.organization.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLocation = !filters.location || project.location === filters.location;
        const matchesDomain = !filters.domain || project.domain === filters.domain;
        const matchesDate = !filters.date || project.date === filters.date;
        return matchesSearch && matchesLocation && matchesDomain && matchesDate;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 1000);
  };

  const handleApply = (project) => {
    setSelectedProject(project);
    setShowApplyModal(true);
  };

  const submitApplication = () => {
    if (selectedProject) {
      // Simulate API call
      setTimeout(() => {
        setApplicationStatus(prev => ({
          ...prev,
          [selectedProject.id]: 'pending'
        }));
        setShowApplyModal(false);

        // Simulate organization response after 3 seconds
        setTimeout(() => {
          setApplicationStatus(prev => ({
            ...prev,
            [selectedProject.id]: 'accepted'
          }));
        }, 3000);
      }, 1000);
    }
  };

  const handleProjectClick = (project) => {
    navigate(`/volunteer/projects/${project.id}`, { state: { project } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 rounded-2xl p-8 shadow-xl mb-8 transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Find Your Next Opportunity</h1>
              <p className="mt-2 text-purple-100 text-lg">Discover meaningful projects that match your interests</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <SparklesIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-purple-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-purple-500" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPinIcon className="h-5 w-5 text-purple-500" />
              </div>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="block w-full pl-12 pr-4 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">All Locations</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <TagIcon className="h-5 w-5 text-purple-500" />
              </div>
              <select
                value={filters.domain}
                onChange={(e) => setFilters({ ...filters, domain: e.target.value })}
                className="block w-full pl-12 pr-4 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">All Domains</option>
                <option value="Education">Education</option>
                <option value="Environment">Environment</option>
                <option value="Women Empowerment">Women Empowerment</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-purple-500" />
              </div>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="block w-full pl-12 pr-4 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSearch}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(searchResults.length > 0 ? searchResults : projects).map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-purple-100"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-purple-100 mt-1">{project.organization}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                  </div>
                </div>
                {participationStatus[project.id] && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-green-500/90 backdrop-blur-sm p-2 rounded-xl flex items-center space-x-1">
                      <CheckBadgeIcon className="h-5 w-5 text-white" />
                      <span className="text-white text-sm font-medium">Participated</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-500">
                    <MapPinIcon className="h-5 w-5 mr-2 text-purple-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <CalendarIcon className="h-5 w-5 mr-2 text-purple-500" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                {participationStatus[project.id] && (
                  <div className="mb-4 bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                        <span className="text-green-700 font-medium">You participated in this event</span>
                      </div>
                      <div className="text-green-600 text-sm">
                        {participationStatus[project.id].hours} hours
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-xl text-sm font-medium">
                      {project.domain}
                    </div>
                    <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-xl text-sm font-medium">
                      {project.duration}
                    </div>
                  </div>
                  {applicationStatus[project.id] ? (
                    <div className="flex items-center space-x-2">
                      {applicationStatus[project.id] === 'pending' && (
                        <span className="text-yellow-600 text-sm font-medium bg-yellow-100 px-4 py-2 rounded-xl">
                          Application Pending
                        </span>
                      )}
                      {applicationStatus[project.id] === 'accepted' && (
                        <span className="text-green-600 text-sm font-medium bg-green-100 px-4 py-2 rounded-xl">
                          Application Accepted
                        </span>
                      )}
                      {applicationStatus[project.id] === 'rejected' && (
                        <span className="text-red-600 text-sm font-medium bg-red-100 px-4 py-2 rounded-xl">
                          Application Rejected
                        </span>
                      )}
                    </div>
                  ) : !participationStatus[project.id] && (
                    <button
                      onClick={() => handleApply(project)}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apply Modal */}
        {showApplyModal && selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apply for {selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">
                Your application will be sent to {selectedProject.postedBy.name} ({selectedProject.postedBy.type}).
                They will review your application and notify you of their decision.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="px-6 py-3 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={submitApplication}
                  className="px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerProjects; 