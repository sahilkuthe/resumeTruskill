import React, { useState } from 'react';
import axios from 'axios';

const templates = [
  { id: 1, name: 'Template1', image: '/template1.jpg' },
  { id: 2, name: 'Template2', image: '/template2.jpg' },
  { id: 3, name: 'Template3', image: '/template3.jpg' },
  { id: 4, name: 'Template4', image: '/template4.jpg' }
];

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
};

function CreateResume() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resumeName, setResumeName] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [showNameDialog, setShowNameDialog] = useState(false);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  };

  const handleSelectClick = () => {
    setShowNameDialog(true);
    setShowPreview(false);
  };

  const handleCreateResume = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}api/resume`,
        {
          templateId: selectedTemplate.id,
          resumeName: resumeName,
        },
        {
          headers: {
            authtoken: localStorage.getItem('token'),
          },
        }
      );
      console.log('Resume created:', response.data);
      // Handle success (e.g., navigate to a different page or show a success message)
    } catch (error) {
      console.error('Error creating resume:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create Resume</h1>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {templates.map((template) => (
          <div key={template.id} className="flex-shrink-0">
            <img
              src={template.image}
              alt={`Template ${template.id}`}
              onClick={() => handleTemplateClick(template)}
              className="w-48 h-72 object-cover cursor-pointer hover:shadow-lg transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      <Modal isOpen={showPreview} onClose={() => setShowPreview(false)}>
        {selectedTemplate && (
          <div className="text-center">
            <img
              src={selectedTemplate.image}
              alt={`Template ${selectedTemplate.id} Preview`}
              className="max-h-[70vh] mx-auto"
            />
            <button
              onClick={handleSelectClick}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Select This Template
            </button>
          </div>
        )}
      </Modal>

      <Modal isOpen={showNameDialog} onClose={() => setShowNameDialog(false)}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Enter Resume Name</h2>
          <input
            type="text"
            value={resumeName}
            onChange={(e) => setResumeName(e.target.value)}
            placeholder="Resume Name"
            className="w-full px-3 py-2 border rounded mb-4"
          />
          <div className="space-x-4">
            <button
              onClick={handleCreateResume}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Create
            </button>
            <button
              onClick={() => setShowNameDialog(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreateResume;