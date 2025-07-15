import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DocumentTextIcon,
  UserGroupIcon,
  CalendarIcon,
  MapPinIcon,
  TagIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const CreateProject = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    requiredSkills: [],
    volunteerRoles: [],
    budget: '',
    impactGoals: [],
  });

  const steps = [
    { id: 1, name: 'Basic Information' },
    { id: 2, name: 'Requirements' },
    { id: 3, name: 'Schedule & Location' },
    { id: 4, name: 'Review' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillAdd = (e) => {
    e.preventDefault();
    const skill = e.target.skill.value.trim();
    if (skill && !formData.requiredSkills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        requiredSkills: [...prev.requiredSkills, skill],
      }));
      e.target.skill.value = '';
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      requiredSkills: prev.requiredSkills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleRoleAdd = (e) => {
    e.preventDefault();
    const role = e.target.role.value.trim();
    if (role && !formData.volunteerRoles.includes(role)) {
      setFormData((prev) => ({
        ...prev,
        volunteerRoles: [...prev.volunteerRoles, role],
      }));
      e.target.role.value = '';
    }
  };

  const handleRoleRemove = (roleToRemove) => {
    setFormData((prev) => ({
      ...prev,
      volunteerRoles: prev.volunteerRoles.filter((role) => role !== roleToRemove),
    }));
  };

  const handleImpactGoalAdd = (e) => {
    e.preventDefault();
    const goal = e.target.goal.value.trim();
    if (goal && !formData.impactGoals.includes(goal)) {
      setFormData((prev) => ({
        ...prev,
        impactGoals: [...prev.impactGoals, goal],
      }));
      e.target.goal.value = '';
    }
  };

  const handleImpactGoalRemove = (goalToRemove) => {
    setFormData((prev) => ({
      ...prev,
      impactGoals: prev.impactGoals.filter((goal) => goal !== goalToRemove),
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Project Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Enter project title"
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700"
              >
                Organization
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Enter organization name"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Project Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Describe your project and its goals"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Required Skills
              </label>
              <form onSubmit={handleSkillAdd} className="mt-1 flex gap-2">
                <input
                  type="text"
                  name="skill"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Add a required skill"
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.requiredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleSkillRemove(skill)}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      <TrashIcon className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Volunteer Roles
              </label>
              <form onSubmit={handleRoleAdd} className="mt-1 flex gap-2">
                <input
                  type="text"
                  name="role"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Add a volunteer role"
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.volunteerRoles.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    {role}
                    <button
                      type="button"
                      onClick={() => handleRoleRemove(role)}
                      className="ml-1 text-green-600 hover:text-green-800"
                    >
                      <TrashIcon className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Project Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Enter project location"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                Project Budget
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="block w-full pl-7 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Project Summary</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Title</h4>
                  <p className="mt-1 text-sm text-gray-900">{formData.title}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Organization
                  </h4>
                  <p className="mt-1 text-sm text-gray-900">
                    {formData.organization}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Description
                  </h4>
                  <p className="mt-1 text-sm text-gray-900">
                    {formData.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Required Skills
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.requiredSkills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Volunteer Roles
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.volunteerRoles.map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Location</h4>
                  <p className="mt-1 text-sm text-gray-900">{formData.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Timeline</h4>
                  <p className="mt-1 text-sm text-gray-900">
                    {formData.startDate} - {formData.endDate}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Budget</h4>
                  <p className="mt-1 text-sm text-gray-900">
                    ${formData.budget}
                  </p>
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
            <div className="flex items-center space-x-4">
              <Link
                to="/projects"
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Projects
              </Link>
              <span className="text-gray-400">/</span>
              <h1 className="text-3xl font-bold text-gray-900">
                Create New Project
              </h1>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <nav aria-label="Progress">
            <ol className="flex items-center">
              {steps.map((step, index) => (
                <li
                  key={step.id}
                  className={`${
                    index !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''
                  } relative`}
                >
                  <div className="flex items-center">
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                        currentStep >= step.id
                          ? 'bg-primary-600'
                          : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          currentStep >= step.id ? 'bg-white' : 'bg-gray-400'
                        }`}
                      />
                    </div>
                    {index !== steps.length - 1 && (
                      <div
                        className={`absolute top-4 h-0.5 w-full ${
                          currentStep > step.id
                            ? 'bg-primary-600'
                            : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <span
                      className={`block text-sm font-medium ${
                        currentStep >= step.id
                          ? 'text-primary-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Form Content */}
        <div className="bg-white shadow rounded-lg p-6">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
              disabled={currentStep === 1}
              className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Previous
            </button>
            <button
              type="button"
              onClick={() =>
                setCurrentStep((prev) => Math.min(prev + 1, steps.length))
              }
              disabled={currentStep === steps.length}
              className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                currentStep === steps.length ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Next
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </button>
            {currentStep === steps.length && (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <CheckIcon className="h-5 w-5 mr-2" />
                Create Project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject; 