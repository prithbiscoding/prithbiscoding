import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { WORLD_CUP_TEAMS } from '@/data/mockData';
import { motion } from 'framer-motion';
import { Upload, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileSetup = () => {
  const { profile, setProfile } = useAppContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState(profile?.username || '');
  const [selectedTeam, setSelectedTeam] = useState(profile?.team || null);
  const [avatar, setAvatar] = useState(profile?.avatar || null);

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && selectedTeam) {
      setProfile({
        username,
        team: selectedTeam,
        avatar
      });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#08080A] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Welcome to <span className="text-neon-lime">OffPitch</span>
          </h1>
          <p className="text-zinc-400 text-lg">Set up your profile and join the ultimate World Cup experience</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111115] border border-white/10 rounded-md p-6 md:p-8 space-y-6">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center gap-4">
            <label htmlFor="avatar-upload" className="cursor-pointer group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neon-lime/50 group-hover:border-neon-lime transition-all relative">
                {avatar ? (
                  <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-zinc-500 group-hover:text-neon-lime transition-colors" />
                  </div>
                )}
              </div>
            </label>
            <input
              id="avatar-upload"
              data-testid="avatar-upload-input"
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
            <p className="text-sm text-zinc-500">Click to upload avatar</p>
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-bold uppercase tracking-wider mb-2">
              Username
            </label>
            <input
              id="username"
              data-testid="username-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-[#08080A] border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-cyan text-white"
              required
            />
          </div>

          {/* Team Selection */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-3">
              Select Your Team
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto pr-2">
              {WORLD_CUP_TEAMS.map((team) => (
                <motion.button
                  key={team.id}
                  data-testid={`team-select-${team.id}`}
                  type="button"
                  onClick={() => setSelectedTeam(team)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-3 rounded-md border transition-all relative ${
                    selectedTeam?.id === team.id
                      ? 'border-neon-lime bg-neon-lime/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{team.flag}</span>
                    <span className="text-sm font-medium truncate">{team.name}</span>
                  </div>
                  {selectedTeam?.id === team.id && (
                    <div className="absolute top-2 right-2">
                      <Check className="w-4 h-4 text-neon-lime" />
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <motion.button
            data-testid="profile-submit-button"
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!username || !selectedTeam}
            className="w-full py-4 bg-neon-lime text-black font-bold rounded-md hover:bg-neon-lime/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {profile ? 'Update Profile' : 'Create Profile'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ProfileSetup;