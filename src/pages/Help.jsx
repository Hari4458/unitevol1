import React, { useState } from 'react';
import {
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      id: 1,
      question: 'How do I get started as a volunteer?',
      answer: 'To get started as a volunteer, create an account, complete your profile with your skills and availability, and browse available opportunities. You can then apply for projects that match your interests and schedule.'
    },
    {
      id: 2,
      question: 'How do I create a project as an NGO?',
      answer: 'As an NGO, you can create a project by going to your dashboard, clicking "Create New Project", and filling out the project details including description, requirements, and timeline. Once published, volunteers can apply to join.'
    },
    {
      id: 3,
      question: 'What is the She Leads program?',
      answer: 'The She Leads program is an initiative to empower women in leadership roles within the volunteering community. It provides mentorship, training, and networking opportunities for women who want to make a difference.'
    },
    {
      id: 4,
      question: 'How do I track my volunteer hours?',
      answer: 'Volunteer hours are automatically tracked when you log activities through the platform. You can view your hours in your dashboard under the "Activity" tab, and they are also reflected in your impact metrics.'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of using UniteVol',
      icon: BookOpenIcon,
      link: '#'
    },
    {
      title: 'Best Practices',
      description: 'Tips for successful volunteering',
      icon: DocumentTextIcon,
      link: '#'
    },
    {
      title: 'Community Guidelines',
      description: 'Rules and guidelines for the platform',
      icon: UserGroupIcon,
      link: '#'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <QuestionMarkCircleIcon className="mx-auto h-12 w-12 text-primary-600" />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            How can we help you?
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Find answers to common questions and get support
          </p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <QuestionMarkCircleIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <a
                  key={resource.title}
                  href={resource.link}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <Icon className="h-8 w-8 text-primary-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">{resource.description}</p>
                </a>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    {openFaq === faq.id ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Still need help?</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary-600 mr-3" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                <p className="text-gray-600">Chat with our support team</p>
              </div>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-6 w-6 text-primary-600 mr-3" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">support@unitevol.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 text-primary-600 mr-3" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help; 