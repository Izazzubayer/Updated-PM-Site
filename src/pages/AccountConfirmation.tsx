
import React from 'react';
import { CheckCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AccountConfirmation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16 pb-20">
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Account Created Successfully!
              </h2>
              
              <p className="text-gray-600 mb-8">
                Welcome to The Kow Company! Your account has been created and you're ready to start exploring our amazing products and services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Confirmation email sent</span>
              </div>
              
              <p className="text-sm text-gray-600 text-left">
                We've sent a confirmation email to your inbox. Please check your email and click the verification link to activate all account features.
              </p>
            </div>

            <div className="space-y-4">
              <Link 
                to="/signin"
                className="block w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Sign In to Your Account
              </Link>
              
              <Link 
                to="/"
                className="block text-green-600 hover:text-green-500 font-medium"
              >
                Explore Our Homepage
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Didn't receive the email? Check your spam folder or{' '}
                <button className="text-green-600 hover:text-green-500 font-medium">
                  resend confirmation
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountConfirmation;
