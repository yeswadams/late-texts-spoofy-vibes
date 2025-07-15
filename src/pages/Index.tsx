
import { useState } from "react";
import { Play, Heart, MoreHorizontal, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const tracks = [
    {
      id: 1,
      title: "Focus & Deep Work",
      duration: "3:24",
      plays: "1,234,567"
    },
    {
      id: 2,
      title: "Motivation & Hustle",
      duration: "4:12",
      plays: "987,654"
    },
    {
      id: 3,
      title: "Calm & Mindfulness",
      duration: "2:45",
      plays: "756,432"
    },
    {
      id: 4,
      title: "Creative Flow State",
      duration: "3:56",
      plays: "543,210"
    },
    {
      id: 5,
      title: "Confidence Boost",
      duration: "4:33",
      plays: "432,109"
    }
  ];

  const handlePlay = (trackTitle: string) => {
    setCurrentTrack(trackTitle);
    setIsAnimating(true);
    setShowModal(true);
    
    // Reset animation after modal opens
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-black text-white">
      {/* Crazy background animation when modal is open */}
      {showModal && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              >
                <span className="text-4xl animate-spin inline-block">🎵</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <h1 className="text-2xl font-bold text-green-400">Spoofy by Adams</h1>
        <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
          Follow
        </Button>
      </header>

      {/* Artist Profile Section */}
      <div className="px-4 md:px-6 pb-8">
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          {/* Album Cover */}
          <div className="w-60 h-60 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-2xl flex items-center justify-center flex-shrink-0">
            <div className="text-center">
              <div className="text-6xl mb-2">🎵</div>
              <div className="text-sm font-semibold">Inspiration</div>
              <div className="text-xs">DAILY MOTIVATION</div>
            </div>
          </div>

          {/* Artist Info */}
          <div className="flex-1">
            <p className="text-sm text-gray-300 mb-2">Playlist</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Daily Inspiration</h1>
            <p className="text-gray-300 mb-6">2.1M monthly listeners</p>
            
            {/* Play Controls */}
            <div className="flex items-center gap-4 mb-6">
              <Button size="lg" className="bg-green-500 hover:bg-green-400 text-black rounded-full w-14 h-14" onClick={() => handlePlay("Random Track")}>
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </Button>
              <Button variant="ghost" size="lg">
                <Heart className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="lg">
                <MoreHorizontal className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8 p-6 bg-black/30 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3">About This Playlist</h3>
          <p className="text-gray-300 leading-relaxed">Curated inspirational content to fuel your day. Whether you need focus, motivation, or just a moment of calm, these tracks will keep you inspired and energized throughout your journey.</p>
        </div>

        {/* Popular Tracks */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Inspirational Topics</h2>
          <div className="space-y-2">
            {tracks.map((track, index) => (
              <div key={track.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors group">
                <span className="text-gray-400 w-4 text-right">{index + 1}</span>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-10 h-10 rounded-full bg-transparent hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" 
                  onClick={() => handlePlay(track.title)}
                >
                  <Play className="w-4 h-4" fill="currentColor" />
                </Button>

                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{track.title}</p>
                  <p className="text-sm text-gray-400">Daily Inspiration</p>
                </div>

                <div className="hidden md:block text-sm text-gray-400">
                  {track.plays}
                </div>

                <div className="text-sm text-gray-400">
                  {track.duration}
                </div>

                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Player Controls (Bottom) */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-800 p-4">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center text-xs">
                🎵
              </div>
              <div>
                <p className="text-sm font-medium">Ready to inspire...</p>
                <p className="text-xs text-gray-400">Daily Inspiration</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Shuffle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <SkipBack className="w-5 h-5" />
              </Button>
              <Button size="sm" className="bg-white text-black hover:bg-gray-200 rounded-full w-8 h-8" onClick={() => handlePlay("Player Control")}>
                <Play className="w-4 h-4" fill="currentColor" />
              </Button>
              <Button variant="ghost" size="sm">
                <SkipForward className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Repeat className="w-4 h-4" />
              </Button>
            </div>

            <div className="hidden md:block text-sm text-gray-400">
              0:00 / 0:00
            </div>
          </div>
        </div>
      </div>

      {/* Crazy Animated Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className={`bg-gray-900 border-gray-700 text-white max-w-md transform transition-all duration-500 ${
          isAnimating ? 'animate-bounce scale-110' : 'scale-100'
        }`}>
          <div className="relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 animate-pulse"></div>
            
            {/* Floating emojis */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-bounce text-2xl"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${10 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1.5s'
                  }}
                >
                  {['🎵', '😉', '💫', '🎶', '✨', '🎤', '🎧', '🔥'][i]}
                </div>
              ))}
            </div>

            <DialogHeader className="relative z-10">
              <DialogTitle className={`text-center text-xl mb-4 ${
                isAnimating ? 'animate-pulse text-pink-400' : ''
              }`}>
                <span className="animate-bounce inline-block">🎵</span> 
                <span className="mx-2">Plot Twist!</span> 
                <span className="animate-bounce inline-block">🎵</span>
              </DialogTitle>
              <DialogDescription className="text-center text-gray-300 text-base leading-relaxed pt-4 relative z-10">
                <div className={`${isAnimating ? 'animate-pulse text-yellow-300' : ''}`}>
                  Okay, okay… I was just kidding! 😄
                </div>
                <div className="mt-2 text-sm">
                  But honestly, if I could actually create real inspiration tracks, 
                  <span className="text-pink-400 font-semibold"> this one would be dedicated to you! </span>
                  <span className="animate-bounce inline-block">😉</span>
                </div>
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex justify-center pt-6 relative z-10">
              <Button 
                onClick={() => setShowModal(false)} 
                className={`bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-2 transform transition-all duration-300 ${
                  isAnimating ? 'animate-pulse scale-110' : 'hover:scale-105'
                }`}
              >
                That's actually sweet! 💚
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
