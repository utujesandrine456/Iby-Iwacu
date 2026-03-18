"use client";

import { useState } from "react";
import {
  User,
  Lock,
  MapPin,
  Bell,
  Shield,
  Palette,
  Eye,
  EyeOff,
  Camera,
  Save
} from "lucide-react";

export default function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Peter",
    lastName: "Ducker",
    email: "peterducker312@gmail.com",
    phone: "(+1) - 234 - 687215421",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    address: "",
    state: "",
    zipCode: "",
    notifications: true,
    marketing: false,
    darkMode: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Settings updated:', formData);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User, color: "from-[#AD5618] to-[#91530A]" },
    { id: "security", label: "Security", icon: Shield, color: "from-[#AD5618] to-[#91530A]" },
    { id: "address", label: "Address", icon: MapPin, color: "from-[#AD5618] to-[#91530A]" },
    { id: "preferences", label: "Preferences", icon: Palette, color: "from-[#AD5618] to-[#91530A]" }
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Picture Section */}
      <div className="bg-gradient-to-r from-[#AD5618]/10 to-[#91530A]/10 rounded-2xl p-6 border border-[#AD5618]/20">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-[#AD5618] to-[#91530A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {formData.firstName[0]}{formData.lastName[0]}
            </div>
            <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg border-2 border-purple-200 hover:scale-110 transition-transform">
              <Camera className="w-4 h-4 text-[#AD5618]" />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Profile Picture</h3>
            <p className="text-gray-600">Upload a new profile picture</p>
            <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#AD5618] to-[#91530A] text-white rounded-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-all duration-300 transform hover:scale-105">
              Change Photo
            </button>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <User className="w-5 h-5 mr-2 text-[#AD5618]" />
          Personal Information
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
              placeholder="Last name"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
              placeholder="Email address"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      {/* Current Password */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Lock className="w-5 h-5 mr-2 text-[#AD5618]" />
          Change Password
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <div className="relative">
              <input
                name="currentPassword"
                type={showPassword ? "text" : "password"}
                value={formData.currentPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <div className="relative">
                <input
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="New password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-gradient-to-r from-[#AD5618]/10 to-[#91530A]/10 rounded-2xl p-6 border border-[#AD5618]/20">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-[#AD5618]" />
          Security Features
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#AD5618]/30">
            <div>
              <h4 className="font-medium text-gray-800">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-[#AD5618] to-[#91530A] text-white rounded-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-all duration-300">
              Enable
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#AD5618]/30">
            <div>
              <h4 className="font-medium text-gray-800">Login Notifications</h4>
              <p className="text-sm text-gray-600">Get notified of new logins</p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-[#AD5618] to-[#91530A] text-white rounded-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-all duration-300">
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAddressTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-green-600" />
          Shipping Address
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
              placeholder="Enter your street address"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
              <input
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                placeholder="State or province"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ZIP/Postal Code</label>
              <input
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                placeholder="ZIP or postal code"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Address Preview */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Preview</h3>
        <div className="bg-white p-4 rounded-lg border border-green-200">
          <p className="text-gray-700">
            {formData.address || "Your address will appear here"}
          </p>
          <p className="text-gray-600 text-sm mt-1">
            {formData.state && formData.zipCode ? `${formData.state}, ${formData.zipCode}` : ""}
          </p>
        </div>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      {/* Notifications */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Bell className="w-5 h-5 mr-2 text-orange-600" />
          Notification Preferences
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">Email Notifications</h4>
              <p className="text-sm text-gray-600">Receive updates about your orders</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleInputChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">Marketing Communications</h4>
              <p className="text-sm text-gray-600">Receive promotional emails and offers</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="marketing"
                checked={formData.marketing}
                onChange={handleInputChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Palette className="w-5 h-5 mr-2 text-orange-600" />
          Appearance
        </h3>
        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-200">
          <div>
            <h4 className="font-medium text-gray-800">Dark Mode</h4>
            <p className="text-sm text-gray-600">Switch to dark theme</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="darkMode"
              checked={formData.darkMode}
              onChange={handleInputChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Account Settings
          </h1>
          <p className="text-gray-600 text-lg">Manage your profile, security, and preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
          {activeTab === "profile" && renderProfileTab()}
          {activeTab === "security" && renderSecurityTab()}
          {activeTab === "address" && renderAddressTab()}
          {activeTab === "preferences" && renderPreferencesTab()}
        </div>

        {/* Save Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
          >
            <Save className="w-5 h-5 mr-2" />
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}


