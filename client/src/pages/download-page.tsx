import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function DownloadPage() {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDownload = async () => {
    try {
      setDownloadStatus('downloading');
      const response = await fetch('/api/create-zip', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to create source code package');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'aiagentsdirectory_src.zip';
      a.click();
      
      window.URL.revokeObjectURL(url);
      setDownloadStatus('success');
    } catch (error) {
      console.error('Download error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred');
      setDownloadStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Download Source Code</h1>
        
        <p className="mb-6 text-gray-700">
          You can download the complete source code of the AI Agents Directory website. This package includes all the frontend and backend code needed to run the site locally or deploy it to your own server.
        </p>
        
        <div className="mb-8">
          <Button 
            onClick={handleDownload}
            disabled={downloadStatus === 'downloading'}
            className="bg-purple-700 hover:bg-purple-600 flex items-center gap-2 text-white px-6 py-3 rounded-md"
          >
            <Download size={20} />
            {downloadStatus === 'downloading' ? 'Creating package...' : 'Download Source Code (.zip)'}
          </Button>
          
          {downloadStatus === 'success' && (
            <p className="text-green-600 mt-3">Download started successfully!</p>
          )}
          
          {downloadStatus === 'error' && (
            <p className="text-red-600 mt-3">Error: {errorMessage}</p>
          )}
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Deployment Instructions</h2>
          
          <ol className="list-decimal ml-6 space-y-4 text-gray-700">
            <li>
              <strong>Unzip the file:</strong>
              <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto text-sm">
                unzip aiagentsdirectory_src.zip<br/>
                cd deployment_src
              </pre>
            </li>
            <li>
              <strong>Install dependencies:</strong>
              <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto text-sm">
                npm install
              </pre>
            </li>
            <li>
              <strong>Start the development server:</strong>
              <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto text-sm">
                npm run dev
              </pre>
              <p className="mt-2">This will run the application on <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:5000</code></p>
            </li>
            <li>
              <strong>For production deployment:</strong>
              <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto text-sm">
                npm run build<br/>
                npm run start
              </pre>
            </li>
          </ol>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Structure</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>/client</strong> - React frontend code</li>
            <li><strong>/server</strong> - Express backend server</li>
            <li><strong>/shared</strong> - Shared types and schemas</li>
          </ul>
          <p className="mt-4 text-gray-600 text-sm">
            The application uses an in-memory database by default. For production, you may want to implement a persistent storage solution.
          </p>
        </div>
      </div>
    </div>
  );
}