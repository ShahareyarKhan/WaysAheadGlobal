import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import { useMode } from '../context/ModeContext';

const AddJobs = () => {
    
  const { darkMode } = useMode();
    const [job, setJob] = useState({
        title: '',
        category: '',
        description: '',
        location: '',
        experience: '',
        openings: 1,
        salary: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const admin = localStorage.getItem('admin')
        if (token && admin) {
            setIsAuthenticated(true);
        } else {

            navigate('/auth-login-signup');
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({
            ...job,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!isAuthenticated) {
            setError('You are not authenticated.');
            return;
        }
    
        setLoading(true);
        setError('');
    
        try {
            const response = await fetch('https://ways-ahead-shahareyar-backend.vercel.app/api/job/jobs', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(job), 
            });
    
            if (response.ok) {
                const data = await response.json(); 
                if (data.success) {
                    setLoading(false);
                    alert('Job added successfully!');
                    navigate('/careers');
                } else {
                    setLoading(false);
                    setError('Failed to add the job, please try again.');
                }
            } else {
                setLoading(false);
                setError('Error adding the job, please try again.');
            }
        } catch (err) {
            setLoading(false);
            setError('Error adding the job, please try again.');
        }
    };
    
    return (
        <div className="w-[90%]  max-w-xl mx-auto flex justify-center items-center flex-col py-3">
            <h2 className={`text-2xl md:text-3xl mt-9 text-center font-bold ${darkMode === 'dark' ? 'text-blue-500' : 'text-orange-600'}  `}>Add a Job</h2>
            <p className="text-sm opacity-70">Only admin can add job in portal.</p>
            <form onSubmit={handleSubmit} className="space-y-4 w-full mt-4">
                <div className="form-group">
                    <label className="block font-semibold text-sm mb-1 ">Job Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={job.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-sm border  rounded-lg focus:outline-none focus:ring-1 "
                    />
                </div>

                <div className="form-group">
                    <label className="block font-semibold text-sm mb-1">Category:</label>
                    <select
                        name="category"
                        value={job.category}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-sm border  rounded-lg focus:outline-none focus:ring-1 "
                    >
                        <option value="">Select Category</option>
                        <option value="Internship">Internship</option>
                        <option value="Graduate Role">Graduate Role</option>
                        <option value="Experienced Professional">Experienced Professional</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="block font-semibold text-sm mb-1">Description:</label>
                    <textarea
                        name="description"
                        value={job.description}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-sm border  rounded-lg focus:outline-none focus:ring-1 "
                    ></textarea>
                </div>

                <div className="form-group">
                    <label className="block font-semibold text-sm mb-1">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={job.location}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-sm border  rounded-lg focus:outline-none focus:ring-1 "
                    />
                </div>

                <div className="form-group">
                    <label className="block font-semibold text-sm mb-1">Experience:</label>
                    <input
                        type="text"
                        name="experience"
                        value={job.experience}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-sm border  rounded-lg focus:outline-none focus:ring-1 "
                    />
                </div>

                <div className="form-group">
                    <label className="block font-semibold text-sm mb-1">Openings:</label>
                    <input
                        type="number"
                        name="openings"
                        value={job.openings}
                        onChange={handleChange}
                        min="1"
                        required
                        className="w-full p-2 text-sm border  rounded-lg focus:outline-none focus:ring-1 "
                    />
                </div>

                <div className="form-group">
                    <label className="block font-semibold text-sm mb-1">Salary (optional):</label>
                    <input
                        type="text"
                        name="salary"
                        value={job.salary}
                        onChange={handleChange}
                        className="w-full p-2 text-sm border  rounded-lg focus:outline-none focus:ring-1 "
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 text-white font-semibold cursor-pointer ${darkMode!=="dark"?"bg-orange-600":"bg-blue-500"} rounded-lg hover:bg-orange-700 transition focus:outline-none focus:ring-1  disabled:opacity-50`}
                >
                    {loading ? 'Adding Job...' : 'Add Job'}
                </button>

            {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}

            </form>
        </div>

    );
};

export default AddJobs;
