import React from 'react';

const StudyMaterials = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-gray-800">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Web Development</h3>
          <p className="mt-2 text-gray-600">Building responsive and dynamic websites.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">UI/UX Design</h3>
          <p className="mt-2 text-gray-600">Creating user-friendly and aesthetically pleasing designs.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">SEO Optimization</h3>
          <p className="mt-2 text-gray-600">Improving your website's visibility on search engines.</p>
        </div>
      </div>
    </section>
  );
}

export default StudyMaterials;
