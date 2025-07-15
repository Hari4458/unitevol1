import React, { useEffect } from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const variants = {
  success: {
    icon: CheckCircleIcon,
    styles: 'bg-green-50 text-green-800 border-green-200',
  },
  error: {
    icon: XCircleIcon,
    styles: 'bg-red-50 text-red-800 border-red-200',
  },
  warning: {
    icon: ExclamationCircleIcon,
    styles: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  },
  info: {
    icon: InformationCircleIcon,
    styles: 'bg-blue-50 text-blue-800 border-blue-200',
  },
};

const Toast = ({
  message,
  variant = 'info',
  duration = 5000,
  onClose,
  position = 'top-right',
}) => {
  const { icon: Icon, styles } = variants[variant];

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  return (
    <div
      className={`fixed ${positionStyles[position]} z-50 animate-slide-in`}
      role="alert"
    >
      <div className={`flex items-center p-4 rounded-lg border ${styles} shadow-lg`}>
        <Icon className="h-5 w-5 mr-3" />
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 hover:bg-gray-100 focus:outline-none"
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Toast; 